import{R as e}from"./iframe-0BZy6ovm.js";import{A as r}from"./AreaChart-DriXAVcO.js";import{R as o}from"./zIndexSlice-BIk5RwDD.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-C1oJnFXa.js";import{X as i}from"./XAxis-CpzBATa7.js";import{Y as m}from"./YAxis-vaHPQHN5.js";import{A as s}from"./Area-DnEhAQvk.js";import{T as p}from"./Tooltip-CZnNvi-A.js";import{L as f}from"./LineChart-DY4IBODK.js";import{L as x}from"./Line-BqjDeTuk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./throttle-DiDu5xyi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D-aV3CxY.js";import"./resolveDefaultProps-DgX86JLB.js";import"./isWellBehavedNumber-D86CElyX.js";import"./d3-scale-D3apC1JT.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n4Lt6mFH.js";import"./chartDataContext-BAuSJd-k.js";import"./CategoricalChart-hrSTyr7f.js";import"./CartesianAxis-D2KJhy7k.js";import"./Layer-6uGVVV7y.js";import"./Text-Bh7Xcfw9.js";import"./DOMUtils-D2BAAnEX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./Label-C0FrVcAE.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./types-CUmyHBBS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B0lHzkOL.js";import"./useAnimationId-D-aszzjL.js";import"./ActivePoints-Cv_MWE-P.js";import"./Dot-B2MNIfB_.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getRadiusAndStrokeWidthFromDot-BStcUf-0.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./Curve-80kkET8R.js";import"./step-LsS_armE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-3OFZXdgi.js";import"./useElementOffset-DjmvUNAh.js";import"./uniqBy-B6coPXXs.js";import"./iteratee-XKFyRSES.js";import"./Cross-BtKgilIw.js";import"./Rectangle-Qt8i-seL.js";import"./util-Dxo8gN5i.js";import"./Sector-CPbFIiWl.js";import"./ErrorBarContext-D0zljKj-.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Pe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Pe as __namedExportsOrder,De as default};
