import{R as e}from"./iframe-dVfgBJJs.js";import{A as r}from"./AreaChart-Bqu91711.js";import{R as n}from"./zIndexSlice-Cjn5-XTM.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-S7mJlfqt.js";import{X as i}from"./XAxis-Dq_1Ikw5.js";import{Y as m}from"./YAxis-Bw51heiQ.js";import{A as p}from"./Area-CLZl7eCO.js";import{T as s}from"./Tooltip-CJSXK5by.js";import{L as f}from"./LineChart-Bjmb6A16.js";import{L as x}from"./Line-CqjanWML.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./throttle-B7XzNIu7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./axisSelectors-rruDH4Fs.js";import"./resolveDefaultProps-BJYE31LD.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./d3-scale-BnZ4Lirr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./Label-Qwq3mE6t.js";import"./ZIndexLayer-CwGLm3MP.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./ActivePoints-CtZ_3WUF.js";import"./Dot-C7HuS7dU.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getRadiusAndStrokeWidthFromDot--eZofM29.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./Curve-BS8zfYeH.js";import"./step-DuOmXCgZ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BdW54Xar.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./Cross-BdrRvahT.js";import"./Rectangle-CBvNSrWO.js";import"./util-Dxo8gN5i.js";import"./Sector-CC1aczQ9.js";import"./ErrorBarContext-CcM5piDn.js";const ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ke as __namedExportsOrder,ke as default};
