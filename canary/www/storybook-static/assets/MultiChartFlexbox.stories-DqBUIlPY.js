import{R as e}from"./iframe-BXyks5nv.js";import{A as a}from"./AreaChart-ddZqfIwy.js";import{R as r}from"./zIndexSlice-DGicPDgx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Dhm3PB36.js";import{X as i}from"./XAxis-CgBDJfd7.js";import{Y as m}from"./YAxis-8vdoPbT3.js";import{A as s}from"./Area-DIDxI1jo.js";import{T as p}from"./Tooltip-Jqt-JmAE.js";import{L as f}from"./LineChart-BbNYR650.js";import{L as x}from"./Line-CrCqIcra.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ybz91CxZ.js";import"./resolveDefaultProps-t9RGNc5u.js";import"./get-cF5BDHN6.js";import"./axisSelectors-58u8_YZx.js";import"./throttle-BMtt0Eqt.js";import"./index-Brvwee9M.js";import"./index-W4KahICV.js";import"./polarAxisSelectors-DMqgJFL7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgObkVdI.js";import"./index-DYE61kxi.js";import"./index-CNe8-YXd.js";import"./renderedTicksSlice-kjkWbf2b.js";import"./index-Ci615jxM.js";import"./CartesianChart-BvGgkH75.js";import"./ZIndexPortal-97xDukRB.js";import"./CategoricalChart-BARINQPN.js";import"./CartesianAxis-BC_l_0hm.js";import"./Layer-x02rJScX.js";import"./Text-DpKdLlQu.js";import"./pageBackground-ButgTNwE.js";import"./ZIndexLayer-aWdCgojo.js";import"./Label-DVoMofK2.js";import"./types-DxlZCjsw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BWqHNOr4.js";import"./ActivePoints-CiLNzEVX.js";import"./Dot-B9UDymE8.js";import"./activeStyles-CF_8K1QH.js";import"./useAnimationId-DXaogzGC.js";import"./dataEntryStyles-stu4dp7O.js";import"./Symbols-B41tlq-V.js";import"./symbol-CQEHnXxm.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CyPK3B5U.js";import"./getRadiusAndStrokeWidthFromDot-Di4p4gXQ.js";import"./ActiveShapeUtils-D6rYuavq.js";import"./Curve-vaJ426Dg.js";import"./step-C3BUyQnl.js";import"./useEffectiveDataKey-BzrOPzFS.js";import"./useElementOffset-UnC9RugP.js";import"./uniqBy-CPmH6AFC.js";import"./iteratee-E2moU9SK.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D6iHirvt.js";import"./Rectangle-ozvy3-Co.js";import"./util-Dxo8gN5i.js";import"./Sector-DIbroa-0.js";import"./ErrorBarContext-B3eXKAAe.js";const be={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},we=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{t as MultiChartFlexbox,n as ResponsiveContainerWithFlexbox,we as __namedExportsOrder,be as default};
