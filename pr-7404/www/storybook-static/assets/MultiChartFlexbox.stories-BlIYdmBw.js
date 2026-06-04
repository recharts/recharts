import{R as e}from"./iframe-DeM0Qb4B.js";import{A as r}from"./AreaChart-BPP3VOrp.js";import{R as n}from"./zIndexSlice-CiNLGVRc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-De-sYFa2.js";import{X as i}from"./XAxis-D6dtEk3_.js";import{Y as m}from"./YAxis-GdnxXDj_.js";import{A as l}from"./Area-CxWCqvn6.js";import{T as s}from"./Tooltip-YRroQXQ_.js";import{L as f}from"./LineChart-BudJlmuc.js";import{L as x}from"./Line-DTawiR2y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./index-B-tkzYsG.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./immer-CXrDBfBc.js";import"./get-CMIg51n-.js";import"./renderedTicksSlice-l4NOSov1.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./CartesianAxis-C8MJ9nCV.js";import"./Layer-B3W7tn4T.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./Label-C5gMwwTi.js";import"./ZIndexLayer-DorZCPdG.js";import"./types-C10ohCRK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-q3oAcZv4.js";import"./useAnimationId-PwiLcg7B.js";import"./ActivePoints-B-QpMSVH.js";import"./Dot-DnzKtKhK.js";import"./RegisterGraphicalItemId-CqW9ab1A.js";import"./GraphicalItemClipPath-BHo-wJHw.js";import"./SetGraphicalItem-zGGg2ijs.js";import"./getRadiusAndStrokeWidthFromDot-DKEbDMSV.js";import"./ActiveShapeUtils-BOazUucV.js";import"./Curve-DAs23S9W.js";import"./step-B11PQnh8.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DaoaIbjQ.js";import"./useElementOffset-CjQbRS76.js";import"./uniqBy-QJuJHQUa.js";import"./iteratee-DGbnOAAX.js";import"./Cross-Lj81fX38.js";import"./Rectangle-xMD6zM8p.js";import"./Sector-CPQwCKem.js";import"./ErrorBarContext-Cu0ArMmH.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
