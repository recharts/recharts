import{R as e}from"./iframe-upOKpTfC.js";import{A as r}from"./AreaChart-Ar22s4b9.js";import{R as n}from"./zIndexSlice-3kJy4_5s.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DwehoHuO.js";import{X as i}from"./XAxis-g3--B4Im.js";import{Y as m}from"./YAxis-0bXs_H74.js";import{A as l}from"./Area-D-zLD_JI.js";import{T as s}from"./Tooltip-C4jhTK9Z.js";import{L as f}from"./LineChart-aGj3yosi.js";import{L as x}from"./Line-C6XO9CBA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./throttle-DFA1f5tU.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-_aeWYehA.js";import"./axisSelectors-Bm__5HSH.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./d3-scale-BoRQfYQu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./CartesianAxis-CO3H2wW4.js";import"./Layer-Bv6NwOOo.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./Label-CWWfz4NX.js";import"./ZIndexLayer-CN5osLDH.js";import"./types-Bdshst7h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DNy5Onjp.js";import"./useAnimationId-ypM0JLm_.js";import"./ActivePoints-CvqveQ6d.js";import"./Dot-CWeDp1FL.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getRadiusAndStrokeWidthFromDot-CMxxoR3Y.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./Curve-D2bD0YW0.js";import"./step-DhetwtCK.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DPG-mFl6.js";import"./useElementOffset-DhZxMWZm.js";import"./uniqBy-CS9AwGpr.js";import"./iteratee-D3my6Ahn.js";import"./Cross-DaVAVaJo.js";import"./Rectangle-CZyj3XrW.js";import"./util-Dxo8gN5i.js";import"./Sector-BfVnPUMY.js";import"./ErrorBarContext-BpEoBZZy.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
