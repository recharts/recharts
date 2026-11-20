import{R as e}from"./iframe-CMFw787F.js";import{A as a}from"./AreaChart-CnLVg82s.js";import{R as r}from"./zIndexSlice-DW-R_9mL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-2hktgjYs.js";import{X as i}from"./XAxis-C_WTSptP.js";import{Y as m}from"./YAxis-CRwIRJrx.js";import{A as s}from"./Area-BC9Nt1XY.js";import{T as p}from"./Tooltip-CxOjIIZ-.js";import{L as f}from"./LineChart-B_BYb0Kv.js";import{L as x}from"./Line-Bw4mZerm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AThag0NN.js";import"./resolveDefaultProps-BOABxk_y.js";import"./get-cF5BDHN6.js";import"./axisSelectors-rk7JAHS6.js";import"./throttle-CR0jnMre.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CNeDjyej.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./CartesianAxis-DJ5NbueU.js";import"./Layer-DoofO9Zt.js";import"./Text-DneUrFCx.js";import"./ZIndexLayer-zQQZbbdp.js";import"./Label-CYtvKaSn.js";import"./types-DA1V6lfX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-Cm2FeWCV.js";import"./dataEntryStyles-CcaQQEAi.js";import"./ActivePoints-BScFO1Ho.js";import"./Dot-DAUTDN16.js";import"./activeStyles-DP81Qo_e.js";import"./useAnimationId-DwVwC1xb.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B5x77PpV.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./Curve-BOyetQ0I.js";import"./step-Droy7KkJ.js";import"./useEffectiveDataKey-rlJiXvMI.js";import"./useElementOffset-O2G3aTiM.js";import"./uniqBy-2YD2k7wm.js";import"./iteratee-6HUgj-CO.js";import"./isArguments-yB-y1yaH.js";import"./Cross-kWt6WnLq.js";import"./Rectangle-CnUfue8k.js";import"./util-Dxo8gN5i.js";import"./Sector-gX6jhz0C.js";import"./ErrorBarContext-tb4T2KmR.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{t as MultiChartFlexbox,n as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
