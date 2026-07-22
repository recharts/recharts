import{R as e}from"./iframe-DZAd3BLm.js";import{A as r}from"./AreaChart-Dl3Hp4mQ.js";import{R as n}from"./zIndexSlice-DDhKiy1V.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-R5ihndfA.js";import{X as i}from"./XAxis-5nXxnrK2.js";import{Y as m}from"./YAxis-CI4kUv4b.js";import{A as p}from"./Area-C37Or-K6.js";import{T as s}from"./Tooltip-D3BArYy6.js";import{L as f}from"./LineChart-DZwZBqnZ.js";import{L as x}from"./Line-CAxB2TgS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3K_a1sL.js";import"./index-CrgUN8tp.js";import"./index-DE0KsAyL.js";import"./index-DpSoO6Ha.js";import"./index-Cx0mUDGV.js";import"./throttle-CxrkEaDJ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CX0U1NQS.js";import"./axisSelectors-BxAq0Acb.js";import"./resolveDefaultProps-D9KqOm2-.js";import"./isWellBehavedNumber-dz6lCIva.js";import"./d3-scale-CqJYvWj_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D6ylJNpo.js";import"./chartDataContext-qN5e6uaD.js";import"./CategoricalChart-CsBU8lh_.js";import"./CartesianAxis-Cc4EZfV0.js";import"./Layer-BfiQlN-H.js";import"./Text-Q1Wur-Yf.js";import"./DOMUtils-DWsppMFw.js";import"./Label-Dx7t0PWj.js";import"./ZIndexLayer-CmOHtK31.js";import"./types-CcoYjlf-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-C7LWLCES.js";import"./useAnimationId-CWfIJf2v.js";import"./ActivePoints-DJ9bpUbD.js";import"./Dot-DlyPxXLd.js";import"./RegisterGraphicalItemId-DxWgL3YR.js";import"./GraphicalItemClipPath-CynJPOAi.js";import"./SetGraphicalItem-Bs1R-JeP.js";import"./getRadiusAndStrokeWidthFromDot-DGJvqL22.js";import"./ActiveShapeUtils-Tj5AoBDs.js";import"./Curve-BGXYHzuU.js";import"./step-CHKBUDm2.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ku3eRdW-.js";import"./useElementOffset-CU9nLeay.js";import"./uniqBy-DA442kbh.js";import"./iteratee-DghfLlN_.js";import"./Cross-DJaJNlOI.js";import"./Rectangle-HzHPhy_K.js";import"./util-Dxo8gN5i.js";import"./Sector-DYSWp28k.js";import"./ErrorBarContext-BoJHJa4K.js";const ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
