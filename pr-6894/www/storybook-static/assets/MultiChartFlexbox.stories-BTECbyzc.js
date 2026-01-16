import{e}from"./iframe-BMuWxLAr.js";import{A as r}from"./AreaChart-BbYyttub.js";import{R as n}from"./arrayEqualityCheck-CqiNO7U9.js";import{C as o}from"./CartesianGrid-BGa4GjxM.js";import{X as m}from"./XAxis-WAtQ1axi.js";import{Y as i}from"./YAxis-Ce7Q5R0b.js";import{A as l}from"./Area-GkGixP3Z.js";import{T as s}from"./Tooltip-gmr6yCdO.js";import{R as f}from"./RechartsHookInspector-zXV2QGE7.js";import{L as E}from"./LineChart-B-x4I9wy.js";import{L as x}from"./Line-91vdzmkR.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./zIndexSlice-BTEUYv6U.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./PolarUtils-TfsB6rvw.js";import"./CartesianChart-FY0XM-zb.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./CartesianAxis-HpZ4NVBh.js";import"./Layer-B3GdCeOT.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./Label-BDcobJj_.js";import"./ZIndexLayer-5mbugvqo.js";import"./types-DTEjZcuz.js";import"./Curve-vG_gbHgm.js";import"./ReactUtils-CnoqxUjn.js";import"./ActivePoints-uR3BYcLE.js";import"./Dot-D-B6iTph.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./GraphicalItemClipPath-C7bBKX3e.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./useAnimationId-CV7m1u0T.js";import"./getRadiusAndStrokeWidthFromDot-BFaAXNYg.js";import"./graphicalItemSelectors-CJs3TUGh.js";import"./useElementOffset-BIPaTuv8.js";import"./iteratee-D0uxWt8q.js";import"./Cross-cWd-WtQK.js";import"./Rectangle-TwJi8_LR.js";import"./Sector-BljMkyic.js";import"./index-B4xTjkvp.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";import"./ErrorBarContext-DEke2_6E.js";import"./ActiveShapeUtils-DpBW0Bti.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CkjHCqiS.js";import"./Symbols-BPsutJwu.js";const xe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                <RechartsHookInspector />
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ce=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ce as __namedExportsOrder,xe as default};
