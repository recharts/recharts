import{e}from"./iframe-DEzN-0IH.js";import{A as r}from"./AreaChart-m0YgwNwb.js";import{R as n}from"./arrayEqualityCheck-Dj5rgmpF.js";import{C as o}from"./CartesianGrid-MkBEUlX4.js";import{X as m}from"./XAxis-C9IejdiW.js";import{Y as i}from"./YAxis-ywkX_5u_.js";import{A as l}from"./Area-DaaQ-iMs.js";import{T as s}from"./Tooltip-OEXQhO7Q.js";import{R as f}from"./RechartsHookInspector-f3uqQnpf.js";import{L as E}from"./LineChart-DCPDbDhd.js";import{L as x}from"./Line-CK5GftQF.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D226X-in.js";import"./hooks-DVXAe2RE.js";import"./axisSelectors-DVjOWlPF.js";import"./zIndexSlice-BLXDXR0o.js";import"./renderedTicksSlice-C4pdhuYh.js";import"./resolveDefaultProps--GysF_k-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKWYeFyd.js";import"./chartDataContext-DDAsV3h8.js";import"./CategoricalChart-ChS4DbUW.js";import"./CartesianAxis-34WftamX.js";import"./Layer-DoKHSLik.js";import"./Text-BWRoC5xn.js";import"./DOMUtils-CUVpLAf7.js";import"./Label-CwNS2FmH.js";import"./ZIndexLayer-DsNBC3BS.js";import"./types-MnMW5XmF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Een90XLK.js";import"./ReactUtils-BQDy0BEl.js";import"./ActivePoints-DHUEXfUz.js";import"./Dot-Dv2iwbT4.js";import"./RegisterGraphicalItemId-BvrhgEWi.js";import"./GraphicalItemClipPath-BhXQU-ZR.js";import"./SetGraphicalItem-k6zlk5Ce.js";import"./useAnimationId-DpL3ZrLE.js";import"./getRadiusAndStrokeWidthFromDot-DCgdaaPW.js";import"./graphicalItemSelectors-DhQyscN-.js";import"./useElementOffset-CJBHLAAR.js";import"./iteratee-BkSREnKY.js";import"./Cross-Cmr9SEfJ.js";import"./Rectangle-C2soG4U2.js";import"./Sector-Cn8fxEII.js";import"./index-UhpklWmI.js";import"./ChartSizeDimensions-BGz0NRwX.js";import"./OffsetShower-Hv6zXz6F.js";import"./PlotAreaShower-xiASrx7K.js";import"./ErrorBarContext-D5xdE6Qk.js";import"./ActiveShapeUtils-DdpV-Pge.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DvZgohrQ.js";import"./Symbols-CNlz260r.js";const Ae={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Re=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Re as __namedExportsOrder,Ae as default};
