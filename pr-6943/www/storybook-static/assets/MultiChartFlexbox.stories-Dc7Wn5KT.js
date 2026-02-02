import{e}from"./iframe-CdO7Aj1B.js";import{A as r}from"./AreaChart-CUOE4kTx.js";import{R as n}from"./arrayEqualityCheck-DSjGda-c.js";import{C as o}from"./CartesianGrid-DVOfHa-A.js";import{X as m}from"./XAxis-B3LqZDEz.js";import{Y as i}from"./YAxis-BL8TYUdf.js";import{A as l}from"./Area-CQvGBKO0.js";import{T as s}from"./Tooltip-BkDTaU7p.js";import{R as f}from"./RechartsHookInspector-8WkUE3nw.js";import{L as E}from"./LineChart-BwwhAkhv.js";import{L as x}from"./Line-hwrXWpiM.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFINL4TS.js";import"./hooks-ByFk5pNE.js";import"./axisSelectors-Cz6m7_H_.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./CartesianAxis-C5xy13MG.js";import"./Layer-oFeUaaGY.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./Label-BR3nHz9_.js";import"./ZIndexLayer-Dre2jW6R.js";import"./types-DFIEYgnV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BvwXZ_2X.js";import"./ReactUtils-D5Zl77ai.js";import"./ActivePoints-qmc9cdem.js";import"./Dot-BR-Bd9Ri.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./useAnimationId-Ci_KtL1a.js";import"./getRadiusAndStrokeWidthFromDot-CcsWdYYV.js";import"./graphicalItemSelectors-Cis3iNGY.js";import"./useElementOffset-C9w_HigE.js";import"./iteratee-Cj9gdGcD.js";import"./Cross-DnWet5eO.js";import"./Rectangle-Ct8C5CYW.js";import"./Sector-D64_Ht99.js";import"./index-B2k25Twf.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./OffsetShower-zZ47YVPO.js";import"./PlotAreaShower-D_H3WfKK.js";import"./ErrorBarContext-DHKDzrNN.js";import"./ActiveShapeUtils-BhQSb30R.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-UgLOqUt_.js";import"./Symbols-DohrOtO1.js";const Ce={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
