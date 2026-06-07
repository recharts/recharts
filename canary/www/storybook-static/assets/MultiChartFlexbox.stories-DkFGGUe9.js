import{R as e}from"./iframe-D7uas6gE.js";import{A as r}from"./AreaChart-De4HAnzg.js";import{R as n}from"./zIndexSlice-CAxEqTk2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DKYL6vzY.js";import{X as i}from"./XAxis-Dlqp3Ogy.js";import{Y as m}from"./YAxis-W2Aym5bJ.js";import{A as l}from"./Area-DLm7jpEL.js";import{T as s}from"./Tooltip-Cs_Evip6.js";import{L as f}from"./LineChart-DLjHcomb.js";import{L as x}from"./Line-Bt42QxV_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPySDgBx.js";import"./index-Dt2ZjhLE.js";import"./index-BtWXQEei.js";import"./index-f8LaKELp.js";import"./index-Dk8a2p8j.js";import"./immer-Bz_FyVM_.js";import"./get-DF7xdNw5.js";import"./renderedTicksSlice-D97r0PID.js";import"./axisSelectors-BhBGSIM3.js";import"./d3-scale-DiIEKRDM.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D-Lsr8PC.js";import"./isWellBehavedNumber-sBFjFrrH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-vfyIL2vN.js";import"./chartDataContext-BvY4an5W.js";import"./CategoricalChart-BfBc4XBk.js";import"./CartesianAxis-C9po9qUK.js";import"./Layer-CiOv_hF8.js";import"./Text-BI32KZkM.js";import"./DOMUtils-BN2-dIl7.js";import"./Label-CK9JMWUG.js";import"./ZIndexLayer-C4cBgWge.js";import"./types-ChkVH57z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DfQiZ4K_.js";import"./useAnimationId-PEz7c_71.js";import"./ActivePoints-BJoa2H8O.js";import"./Dot-DBpQmpJD.js";import"./RegisterGraphicalItemId-9gLwt1vY.js";import"./GraphicalItemClipPath-DuOXc9m5.js";import"./SetGraphicalItem-BFYbkBHm.js";import"./getRadiusAndStrokeWidthFromDot-CDEMAmhz.js";import"./ActiveShapeUtils-BP0tkgwI.js";import"./Curve-D_EYdykS.js";import"./step-5js8pNAW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CYuNarMa.js";import"./useElementOffset-BSHaZMpy.js";import"./uniqBy-BlE1Djfj.js";import"./iteratee-C3akJ9Jb.js";import"./Cross-oRp7yKgA.js";import"./Rectangle-BiICusyV.js";import"./Sector-B6HCXRpA.js";import"./ErrorBarContext-B-gFvCKx.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
