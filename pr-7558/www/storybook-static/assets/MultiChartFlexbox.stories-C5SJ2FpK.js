import{R as e}from"./iframe-CbiyPpOQ.js";import{A as r}from"./AreaChart-DDRelorU.js";import{R as n}from"./zIndexSlice-CpGqLNgf.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BVt8BIlH.js";import{X as i}from"./XAxis-DS8USeJo.js";import{Y as m}from"./YAxis-DQOVOwqz.js";import{A as l}from"./Area-C1cn8-Og.js";import{T as s}from"./Tooltip-9db9HdZt.js";import{L as f}from"./LineChart-D1dXGo6k.js";import{L as x}from"./Line-CX19U38B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-TOXK1lwb.js";import"./index-Bca_d3DG.js";import"./index-D-fswtUu.js";import"./index-DN_zLXSU.js";import"./index-DyGRF9jX.js";import"./throttle-qq70w1DA.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-lYU8ut4F.js";import"./axisSelectors-CCqDM7T-.js";import"./resolveDefaultProps-BWAgYfPV.js";import"./isWellBehavedNumber-CgYUMQU-.js";import"./d3-scale-Bap3CkU2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DS8MRKt-.js";import"./chartDataContext-Bznw4op9.js";import"./CategoricalChart-l1FuTysV.js";import"./CartesianAxis-DdhiMqO2.js";import"./Layer-DqgjT4E-.js";import"./Text-6JPkC2Bj.js";import"./DOMUtils-Db0o8Zdl.js";import"./Label-Bqdiqqm9.js";import"./ZIndexLayer-BdQyI4NS.js";import"./types-CzM6FhOK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DRdB4DWi.js";import"./useAnimationId-BzqZ1CPr.js";import"./ActivePoints-BcBYuZ18.js";import"./Dot-CrmxLVmG.js";import"./RegisterGraphicalItemId-DWEdhGSI.js";import"./GraphicalItemClipPath-Bzcd_Jhp.js";import"./SetGraphicalItem-DrfGre3X.js";import"./getRadiusAndStrokeWidthFromDot-CcpM4ut6.js";import"./ActiveShapeUtils-CSCl1dIf.js";import"./Curve-B54n4LWH.js";import"./step-CAX9qAEt.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BRH2XptT.js";import"./useElementOffset-9aMbp_tO.js";import"./uniqBy-DQFa7_m1.js";import"./iteratee-B4yI5Ocl.js";import"./Cross-3CQgNSTQ.js";import"./Rectangle-CwDyS8Ci.js";import"./util-Dxo8gN5i.js";import"./Sector-BBU2MoeS.js";import"./ErrorBarContext-BC0_okWx.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,ke as __namedExportsOrder,Re as default};
