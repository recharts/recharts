import{R as e}from"./iframe-BcyvxDDm.js";import{A as r}from"./AreaChart-CU-AVHXv.js";import{R as n}from"./zIndexSlice-CjqwPb4I.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-r9xfU8Bh.js";import{X as i}from"./XAxis-hKqegIsy.js";import{Y as m}from"./YAxis-DWNExzo5.js";import{A as l}from"./Area-BFPnSWqy.js";import{T as s}from"./Tooltip-DfrCugVp.js";import{L as f}from"./LineChart-DkoRA9WP.js";import{L as x}from"./Line-BnwOZ2r5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BKq7sB4k.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./throttle-Da4mYIun.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C78J9WJd.js";import"./axisSelectors-Ft8qoIRM.js";import"./resolveDefaultProps-DYK2TugC.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./d3-scale-CuOcyn8C.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./CartesianAxis-X-wBC9Mi.js";import"./Layer-BbNzeSuC.js";import"./Text-DHboH0PZ.js";import"./DOMUtils-BbuOOwxk.js";import"./Label-DKWc-r2Z.js";import"./ZIndexLayer-O4JEDRQM.js";import"./types-BRN82dlo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C_84PZuB.js";import"./useAnimationId-UCivMRaV.js";import"./ActivePoints-8g9VJ2oC.js";import"./Dot-33A0Szh_.js";import"./RegisterGraphicalItemId-MfcacHn_.js";import"./GraphicalItemClipPath-gcf9l3Dr.js";import"./SetGraphicalItem-NfXYYfkR.js";import"./getRadiusAndStrokeWidthFromDot-C-lZV2mT.js";import"./ActiveShapeUtils-CAO4oJEH.js";import"./Curve-Cd8N0Bzf.js";import"./step-VnJCxhpn.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BBvA2a8_.js";import"./useElementOffset-BgpGSJ6K.js";import"./uniqBy-Dl_hAjLn.js";import"./iteratee-Danss_sE.js";import"./Cross-Dg8BbIcS.js";import"./Rectangle-Df6t51Wj.js";import"./util-Dxo8gN5i.js";import"./Sector-CFNehNZn.js";import"./ErrorBarContext-Bo7tXsWd.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
