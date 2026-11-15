import{R as e}from"./iframe--N-T_hBz.js";import{A as a}from"./AreaChart-Bx2rYoz9.js";import{R as r}from"./zIndexSlice-BrmEEgcV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Bo8kzbsf.js";import{X as i}from"./XAxis-DdKAxJ7S.js";import{Y as m}from"./YAxis-DsuWS9IR.js";import{A as s}from"./Area-CsryjhZ0.js";import{T as p}from"./Tooltip-BblCHtO7.js";import{L as f}from"./LineChart-kwmHH-ds.js";import{L as x}from"./Line-DFZhpl4a.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dga53r6u.js";import"./resolveDefaultProps-BZdVkepW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-dSJNPUYj.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./CartesianAxis-D25MAZFZ.js";import"./Layer-1myxLhO2.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./Label-DcuyFpKL.js";import"./types-CDdNjsiG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CggySQjW.js";import"./ActivePoints-BSj_UmGI.js";import"./Dot-MqsnkUih.js";import"./activeStyles-CQz5jccO.js";import"./useAnimationId-B0H5IbY6.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getRadiusAndStrokeWidthFromDot-C_-ClNXz.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./Curve-AUzua7kl.js";import"./step-BCTml7Sd.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./useElementOffset-DwViDVhc.js";import"./uniqBy-Ba4jswSg.js";import"./iteratee-CiVllZTn.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BpIRhDE_.js";import"./Rectangle-C0b2pOCq.js";import"./util-Dxo8gN5i.js";import"./Sector-Bqy4ZQqB.js";import"./ErrorBarContext-Cxj8MR3w.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
