import{_ as e,p as i,q as n,a1 as s}from"./framework-d81ad7e5.js";const d={},r=s(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="公共配置" tabindex="-1"><a class="header-anchor" href="#公共配置" aria-hidden="true">#</a> 公共配置</h2><p>说明： conf/nginx.conf 中存放在公共配置中， conf.d/upstream.conf 中存放upstream配置， conf.d/host.conf 中存放 location 等其他配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

worker_processes auto;
error_log logs/error.log;
pid run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.dynamic.
# include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 2048;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    #log_format  main  &#39;$remote_addr - $host [$time_local] &quot;$request&quot; &#39; &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39; &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
    log_format  main &#39;$time_iso8601|$status|$remote_addr|$host|$server_port|$server_protocol|$request_method|$host$request_uri|$request_filename|$content_type|$bytes_sent|$body_bytes_sent|$request_time|$http_user_agent|$http_Tencent_LeakScan|$upstream_addr|$http_referer&#39;;
    error_log logs/error.log;

    keepalive_timeout  30;

    server_names_hash_max_size 512;
    server_names_hash_bucket_size 128;

    server_tokens off;
    sendfile       on;
    tcp_nopush     off;
    tcp_nodelay    on;
    #keepalive_timeout  3 10;
    client_max_body_size  8m;
    client_header_timeout 30;
    client_body_timeout   30;
    send_timeout   30;
    #fastcgi_connect_timeout 300;
    #fastcgi_send_timeout 300;
    #fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 8 64k;
    fastcgi_busy_buffers_size 128k;
    fastcgi_intercept_errors  on;

    gzip  on;
    gzip_min_length             1024;
    gzip_buffers                4 8k;
    gzip_http_version           1.0;
    gzip_comp_level             1;
    gzip_vary on;
    gzip_types   text/plain text/css application/x-javascripts text/xml application/xml application/xml+rss text/javascript;

    proxy_next_upstream error timeout invalid_header http_500 http_503;
    proxy_set_header   Host             $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_intercept_errors on;
    proxy_redirect off;
    port_in_redirect off;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # dor more information.
    include conf.d/*.conf;

    ipip_db /data/app/nginx/modules/17monipdb.datx 60m;
    ipip_parse_ip $remote_addr;
    # ipip_parse_ip $http_x_forwarded_for;
    proxy_set_header ip $http_x_forwarded_for;
    proxy_set_header country_code $ipip_country_code;
    proxy_set_header country $ipip_country_name;
    proxy_set_header province $ipip_region_name;
    proxy_set_header city $ipip_city_name;
    proxy_set_header owner $ipip_owner_domain;
    proxy_set_header isp $ipip_isp_domain;
    proxy_set_header idc $ipip_idc;
    proxy_set_header latitude $ipip_latitude;
    proxy_set_header longitude $ipip_longitude;
}
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[r];function a(t,o){return i(),n("div",null,l)}const v=e(d,[["render",a],["__file","nginx.html.vue"]]);export{v as default};
