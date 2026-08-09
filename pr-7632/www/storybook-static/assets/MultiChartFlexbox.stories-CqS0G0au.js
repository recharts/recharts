import{R as e}from"./iframe-DYQm5pDK.js";import{A as r}from"./AreaChart-B49ryG8k.js";import{R as o}from"./zIndexSlice-CJYweGKN.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BJ5NVgIf.js";import{X as i}from"./XAxis-CZY80vys.js";import{Y as m}from"./YAxis-CVSg61xk.js";import{A as p}from"./Area--QzhsSLb.js";import{T as s}from"./Tooltip-BL26R0Fe.js";import{L as f}from"./LineChart-CQnyySwh.js";import{L as x}from"./Line-B1Oexf9c.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gRpL_xKU.js";import"./index-B8vof7O1.js";import"./index-Dvf4xz5M.js";import"./index-D9641aDn.js";import"./index-CSHdKH08.js";import"./throttle-Ctp9_qVa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSPBywkg.js";import"./resolveDefaultProps-V2XetKb4.js";import"./isWellBehavedNumber-Db1VnkRV.js";import"./d3-scale-CuSyjdwU.js";import"./renderedTicksSlice-C_bKCtit.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1bq5gRk4.js";import"./chartDataContext-Dp_kX4bj.js";import"./CategoricalChart-DNCs6fuc.js";import"./CartesianAxis-DZAfkwU8.js";import"./Layer-BE5fWip9.js";import"./Text-BBWNQ9ND.js";import"./DOMUtils-DI2U8hPw.js";import"./Label-2fJkWQrM.js";import"./ZIndexLayer-CYpXSJgQ.js";import"./types-DMj2PdKG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BL-IAPcg.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CRKAM_Pk.js";import"./useAnimationId-Dfuzx8c4.js";import"./ActivePoints-BAfWfPzl.js";import"./Dot-vrg5zOK2.js";import"./RegisterGraphicalItemId-CoopfHz0.js";import"./graphicalItemIdentity-c8N24HJ4.js";import"./SetGraphicalItem-F1NAG8Fb.js";import"./getRadiusAndStrokeWidthFromDot-C6IhQk60.js";import"./ActiveShapeUtils-DDuLsW0U.js";import"./Curve-1QDxrN5k.js";import"./step-CyVWmh7T.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B1i3HIK9.js";import"./useElementOffset-DeY_vqj5.js";import"./uniqBy-CK7b43Ay.js";import"./iteratee-Daur8jM2.js";import"./Cross-CUYn565i.js";import"./Rectangle-C2cnIGYc.js";import"./util-Dxo8gN5i.js";import"./Sector-D1BdjjPU.js";import"./ErrorBarContext-BW9yLQD5.js";const Ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Resize the window to test ResponsiveContainer</p>
        <div className="flex-parent">
          <ResponsiveContainer width="100%" className="flex-child">
            <AreaChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child">
            <LineChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="amt" stroke="orange" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>;
  },
  args: {}
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }];
    return <div style={{
      height: '100%',
      width: '100%',
      margin: 0
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '200px'
      }}>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>;
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const De=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,De as __namedExportsOrder,Ke as default};
