import{R as e}from"./iframe-CMVn_SNm.js";import{A as r}from"./AreaChart-CmGhIeLb.js";import{R as n}from"./zIndexSlice-5bfS2JCG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Wjo40xqZ.js";import{X as i}from"./XAxis-BK_m78bZ.js";import{Y as m}from"./YAxis-8PetJcY4.js";import{A as l}from"./Area-VlVCwSbH.js";import{T as s}from"./Tooltip-Dbl1c9aE.js";import{L as f}from"./LineChart-Bp5qTEb4.js";import{L as x}from"./Line-CGg890gZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./immer-BrNA81ld.js";import"./get-CIPBGhdg.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./resolveDefaultProps-CRaaAotp.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./CartesianAxis-HAFu0ua0.js";import"./Layer-NKsa_8yv.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./Label-DCWSGF-w.js";import"./ZIndexLayer-qzvYtv-n.js";import"./types-DXSGjGm9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-i8neEi91.js";import"./useAnimationId-DARzAta0.js";import"./ActivePoints-BTW7Abvw.js";import"./Dot-BUoSKBIz.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";import"./getRadiusAndStrokeWidthFromDot-CIJw8Q-v.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./Curve-Bldv1TQU.js";import"./step-BXHdJ1Cz.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CVpIZw14.js";import"./useElementOffset-C51qjBi2.js";import"./uniqBy-DICaK5oX.js";import"./iteratee-C6Ehk9Ya.js";import"./Cross-sXi5GBj7.js";import"./Rectangle-DOnpVfWW.js";import"./util-Dxo8gN5i.js";import"./Sector-BnI29xdT.js";import"./ErrorBarContext-B0E3DilN.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
