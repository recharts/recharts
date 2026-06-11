import{R as e}from"./iframe-seguPege.js";import{A as r}from"./AreaChart-C2us5L1M.js";import{R as n}from"./zIndexSlice-Cb-1bZoU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Be1ZTGJ9.js";import{X as i}from"./XAxis-DUluPi7y.js";import{Y as m}from"./YAxis-DMmP-D66.js";import{A as l}from"./Area-DAmjiq7l.js";import{T as s}from"./Tooltip-Db5hZzcb.js";import{L as f}from"./LineChart-Dio_wJ_d.js";import{L as x}from"./Line-B5wrNkVZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./immer-Ae2GGYT-.js";import"./get-BPoksESJ.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BPZN0bld.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./CartesianAxis-CKcebKQz.js";import"./Layer-D0gi-KwG.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./Label-Bj9fNTdt.js";import"./ZIndexLayer-E8T2jKop.js";import"./types-Dh_7L2tU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BjEmPeVW.js";import"./useAnimationId-Bb_iGYOg.js";import"./ActivePoints-BGPZQ7DK.js";import"./Dot-JTIqjmcj.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getRadiusAndStrokeWidthFromDot-7f0lski4.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./Curve-Dy50jrXo.js";import"./step-CXbb4GLS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Dsu_Rt3k.js";import"./useElementOffset-Bd0nUEN2.js";import"./uniqBy-PllRjql5.js";import"./iteratee-CGB8lHH8.js";import"./Cross-bh_WB7gE.js";import"./Rectangle-ByDmPg9d.js";import"./Sector-Ir-ziIqp.js";import"./ErrorBarContext-CqxJy0tW.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
