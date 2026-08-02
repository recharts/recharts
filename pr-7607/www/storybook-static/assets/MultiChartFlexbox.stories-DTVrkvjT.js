import{R as e}from"./iframe-Da76_689.js";import{A as r}from"./AreaChart-EFQkGxUd.js";import{R as o}from"./zIndexSlice-a0xNinnk.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CnvFZ9BI.js";import{X as i}from"./XAxis-DepWA4im.js";import{Y as m}from"./YAxis-Dp_F69G6.js";import{A as p}from"./Area-CxeL95H_.js";import{T as s}from"./Tooltip-DZiBg5Kd.js";import{L as f}from"./LineChart-DBro110D.js";import{L as x}from"./Line-Cqr58geY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./throttle-COYVVxZg.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./d3-scale-DyCdYIOY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./CartesianAxis-BQNrFnRM.js";import"./Layer-BItCE877.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./Label-BNqYKN1e.js";import"./ZIndexLayer-DP22msHm.js";import"./types-Dy7AAOTV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-TTrqb8VQ.js";import"./useAnimationId-hnsh8Uwf.js";import"./ActivePoints-XUjLYmrr.js";import"./Dot-Clx9ykW3.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./graphicalItemIdentity-HzAIj0MZ.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./Curve-BZ7uJ3AN.js";import"./step-fSL6Yfr6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-bVhLjSEG.js";import"./useElementOffset-BzkW5WMd.js";import"./uniqBy-CW1xeKFH.js";import"./iteratee-Bhotarsi.js";import"./Cross-C7svBc8m.js";import"./Rectangle-B4LUgefq.js";import"./util-Dxo8gN5i.js";import"./Sector-xlID3bO4.js";import"./ErrorBarContext-rSCCD8H3.js";const Ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const De=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,De as __namedExportsOrder,Ke as default};
