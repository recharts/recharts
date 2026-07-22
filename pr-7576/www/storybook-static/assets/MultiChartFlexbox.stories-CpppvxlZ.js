import{R as e}from"./iframe-Cy6UHwH8.js";import{A as r}from"./AreaChart-CHLr_ukT.js";import{R as n}from"./zIndexSlice-Dv2HqMCj.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BHWhvLkc.js";import{X as i}from"./XAxis-BEHj4vqI.js";import{Y as m}from"./YAxis-Czbc2cL9.js";import{A as p}from"./Area-Cv6-tcJV.js";import{T as s}from"./Tooltip-xaQOL5rL.js";import{L as f}from"./LineChart-BySD3soj.js";import{L as x}from"./Line-BzhYL1rQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./throttle-CrXcydw9.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./axisSelectors-DXOe3ZcM.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./d3-scale-Bvw0bMMA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./CartesianAxis-D4Lg0Pka.js";import"./Layer-Ju7yA9Ak.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./Label-D4x62xM0.js";import"./ZIndexLayer-BhFWLYxf.js";import"./types-Wlq7LyUb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-P3TyXGJ4.js";import"./useAnimationId-q_i8pRM6.js";import"./ActivePoints-DwOS4gGn.js";import"./Dot-Coa1b26v.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getRadiusAndStrokeWidthFromDot-BnXETLA5.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./Curve-l3wqrsuS.js";import"./step-CuI5m1Cq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CUpJgTvK.js";import"./useElementOffset-CogvFxV1.js";import"./uniqBy-BpJlFfbc.js";import"./iteratee-DsECz__7.js";import"./Cross-C7BtRR4W.js";import"./Rectangle-NwWJwHZO.js";import"./util-Dxo8gN5i.js";import"./Sector-gxLm8D69.js";import"./ErrorBarContext-DbNi8xqP.js";const ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
