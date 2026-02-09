import{e}from"./iframe-CtEwCT9X.js";import{A as r}from"./AreaChart-ICsmlKyP.js";import{R as n}from"./arrayEqualityCheck-H3JWu4Kp.js";import{C as o}from"./CartesianGrid-B-PS9MdK.js";import{X as m}from"./XAxis-Dyu1KvxF.js";import{Y as i}from"./YAxis-KCRp4wE3.js";import{A as l}from"./Area-BQhbcDDK.js";import{T as s}from"./Tooltip-B-kEP6ee.js";import{R as f}from"./RechartsHookInspector-DzvPF_wD.js";import{L as E}from"./LineChart-CAxR_FLF.js";import{L as x}from"./Line-EbUlvgbk.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AnHxT7w4.js";import"./hooks-rcQ-gxvj.js";import"./axisSelectors-CLqmQnll.js";import"./zIndexSlice-C0NscEQ4.js";import"./resolveDefaultProps-D4rIxQ8x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DROVOQUl.js";import"./chartDataContext-3NcgbJTI.js";import"./CategoricalChart-DA7sCUkZ.js";import"./CartesianAxis-CVBmqBFQ.js";import"./Layer-BNdxATQx.js";import"./Text-BjHYQlz2.js";import"./DOMUtils-B7ui-v2S.js";import"./Label-4VfWqw9i.js";import"./ZIndexLayer-BGiHPSQp.js";import"./types-BlQIDijQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CYu7zDaL.js";import"./ReactUtils-BjGJq1or.js";import"./ActivePoints-CRykM8N_.js";import"./Dot-B6v6wM9O.js";import"./RegisterGraphicalItemId-g2iXfztY.js";import"./GraphicalItemClipPath-C8XfWWgk.js";import"./SetGraphicalItem-bKBrJsc3.js";import"./useAnimationId-DKUOkxb7.js";import"./getRadiusAndStrokeWidthFromDot-BLthc_nE.js";import"./graphicalItemSelectors-D3ATsXBN.js";import"./useElementOffset-DPwAogKS.js";import"./iteratee-COP-Hq4Y.js";import"./Cross-Dqutsibu.js";import"./Rectangle-BpE70r4e.js";import"./Sector-Do1ff_IB.js";import"./index-wj7KHo_g.js";import"./ChartSizeDimensions-yLUqjZ4u.js";import"./OffsetShower-2b6-cTCa.js";import"./PlotAreaShower-CQqB1CA9.js";import"./ErrorBarContext-G6eCMKH6.js";import"./ActiveShapeUtils-BcU5bshf.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DBpBN19V.js";import"./Symbols-DsTuGPc2.js";const Ce={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ae=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ae as __namedExportsOrder,Ce as default};
