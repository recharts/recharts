import{R as e}from"./iframe-r_02-Jx1.js";import{A as r}from"./AreaChart-m7QQdEzS.js";import{R as o}from"./zIndexSlice-DicCmdef.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DvK7iabw.js";import{X as i}from"./XAxis-CVgPbfXC.js";import{Y as m}from"./YAxis-Bi1VNLZO.js";import{A as s}from"./Area-Bm_CzmuT.js";import{T as p}from"./Tooltip-D2rWhrrA.js";import{L as f}from"./LineChart-Bwkd-hrU.js";import{L as x}from"./Line-gVyrED1g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQFxUNUu.js";import"./index-N0rIL4Gt.js";import"./index-3jrDyBev.js";import"./index-1kThdQ6e.js";import"./index-wzqytK4Q.js";import"./throttle-BdAdSRQA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dk3JE-i1.js";import"./resolveDefaultProps-DyxRtFzB.js";import"./isWellBehavedNumber-CBLlozNg.js";import"./d3-scale-ZwXuuq5P.js";import"./renderedTicksSlice-DFasVLMR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGJHdGBf.js";import"./chartDataContext-BdayT2-p.js";import"./CategoricalChart-BXr2d9-i.js";import"./CartesianAxis-D3LO-u6r.js";import"./Layer-dybzDHm9.js";import"./Text-DCZHyyNe.js";import"./DOMUtils-BlgfTScp.js";import"./useBackwardsCompatibleTheme-WaqTwaFy.js";import"./Label-CNQryUt-.js";import"./ZIndexLayer-DmaqXjfN.js";import"./types-DPBZ02ip.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CW8FYpXu.js";import"./useAnimationId-R3ZNERdL.js";import"./ActivePoints-B4uNP6Ql.js";import"./Dot-CPXaMvXV.js";import"./RegisterGraphicalItemId-BP1XikYq.js";import"./GraphicalItemClipPath-D_fliYIp.js";import"./SetGraphicalItem-ByUdxl3U.js";import"./getRadiusAndStrokeWidthFromDot-CrfZ4miq.js";import"./ActiveShapeUtils-BgiK615A.js";import"./Curve-BS9D-rBh.js";import"./step-CkxDYVc4.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CJZHVbEk.js";import"./useElementOffset-slB8K9ts.js";import"./uniqBy-9Ezk50RS.js";import"./iteratee-Bv8d6n2u.js";import"./Cross-DUt1vd2f.js";import"./Rectangle-D-S66SPd.js";import"./util-Dxo8gN5i.js";import"./Sector-Dgzpsjtf.js";import"./ErrorBarContext-DmfoTXVm.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
