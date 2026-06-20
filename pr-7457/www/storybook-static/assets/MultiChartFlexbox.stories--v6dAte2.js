import{R as e}from"./iframe-CbmcvRkz.js";import{A as r}from"./AreaChart-s9Is9T1e.js";import{R as n}from"./zIndexSlice-DoKZE_fT.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Dh9Qs3ud.js";import{X as i}from"./XAxis-BXkS-79Y.js";import{Y as m}from"./YAxis-C-NN2TSd.js";import{A as l}from"./Area-QgDKigrb.js";import{T as s}from"./Tooltip-BI_aTt7z.js";import{L as f}from"./LineChart-BWO9Nu2v.js";import{L as x}from"./Line-cyvqn16I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6OXESHp.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./immer-BWk67B8y.js";import"./get-prZAxsgN.js";import"./renderedTicksSlice-BID11n2_.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./CartesianAxis-Duc97zpX.js";import"./Layer-aQjZulmS.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./Label-CMFdvkIW.js";import"./ZIndexLayer-ByjAgEa2.js";import"./types-aj_9xhUM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C8brG2ut.js";import"./useAnimationId-Bg4LY1-F.js";import"./ActivePoints-Bm3DH6tK.js";import"./Dot-CYkHGb9U.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./getRadiusAndStrokeWidthFromDot-D4nwke3n.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./Curve-Ba6UoBvx.js";import"./step-qj-9nXS-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C9f7OtbQ.js";import"./useElementOffset-CYZx6MBE.js";import"./uniqBy-UCX-Zdy2.js";import"./iteratee-DJKoVJ9l.js";import"./Cross-a0L3AOFH.js";import"./Rectangle-DL-7nMhN.js";import"./util-Dxo8gN5i.js";import"./Sector-CTAwYSUQ.js";import"./ErrorBarContext-Cf-_Bhe_.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
