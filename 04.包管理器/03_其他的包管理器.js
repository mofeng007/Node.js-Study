/* 
    早期的npm存在有很多的问题，
        所以有很多的厂商尝试着开发了一些代替npm的工具
        比如 yarn pnpm
        
        在之前，这些第三方的工具相较于npm具有的很多的优势
            但是随着时间的推进，npm也在进行不断的迭代，所以到今天
            npm和其他工具的差距并不是非常的大
        
        和npm相比，yarn下载包的速度会快一些

        yarn（个人习惯用yarn）
            安装
                corepack enable
                yarn init -2
            镜像配置
                yarn config set registry https://registry.npmmirror.com

                删除配置：
                    yarn config delete registry

        pnpm
            - 安装
                npm install -g pnpm
            
            - 镜像
                pnpm config set registry https://registry.npmmirror.com

                - 取消
                pnpm config delete registry


        
        
*/