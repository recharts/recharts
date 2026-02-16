import{e}from"./iframe-BI7oaA_G.js";import{A as r}from"./AreaChart-oxjm2roO.js";import{R as n}from"./arrayEqualityCheck-CqFOZzs4.js";import{C as o}from"./CartesianGrid-Ac4yv0A5.js";import{X as m}from"./XAxis-CapxM4jv.js";import{Y as i}from"./YAxis-RsyqFzC6.js";import{A as l}from"./Area-BkTk4Uuz.js";import{T as s}from"./Tooltip-87W6LZYY.js";import{R as f}from"./RechartsHookInspector-B5lL4wmf.js";import{L as E}from"./LineChart-BXiycZoM.js";import{L as x}from"./Line-CisjuVcw.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-o4Mh8MkL.js";import"./hooks-BYYSr3I0.js";import"./axisSelectors-CGdfGHmv.js";import"./zIndexSlice-BJBRf06a.js";import"./renderedTicksSlice-C7y0xKdM.js";import"./resolveDefaultProps-BmsjXKM6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C-ZN2oGk.js";import"./chartDataContext-Bvker2sK.js";import"./CategoricalChart-Cgi21fgg.js";import"./CartesianAxis-maHjO968.js";import"./Layer-_hLoKUUt.js";import"./Text-uzPlC_zS.js";import"./DOMUtils-D_254HoM.js";import"./Label-CW-OXdCr.js";import"./ZIndexLayer-ow9Mnhy6.js";import"./types-BMyhg35s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DhRTsi0L.js";import"./ReactUtils-CElkG0RD.js";import"./ActivePoints-BR-wKGMx.js";import"./Dot-DtG9WkmN.js";import"./RegisterGraphicalItemId-D0nTrYTJ.js";import"./GraphicalItemClipPath-BcJbyhsI.js";import"./SetGraphicalItem-C9Na75Z3.js";import"./useAnimationId-DTs7L-5Q.js";import"./getRadiusAndStrokeWidthFromDot-DsJx8dx0.js";import"./graphicalItemSelectors-Czqo4CT5.js";import"./useElementOffset-Cs90PYbu.js";import"./iteratee-Bl6YWlFc.js";import"./Cross-HJItOYqe.js";import"./Rectangle-ICwvq_9q.js";import"./Sector-CLQqFD3N.js";import"./index-DJbyc3-8.js";import"./ChartSizeDimensions-DfSqX2vT.js";import"./OffsetShower-DIooMjVh.js";import"./PlotAreaShower-9a9xIQCa.js";import"./ErrorBarContext-Cfw2K8JX.js";import"./ActiveShapeUtils-BLY2D3T7.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DmJQSZ1N.js";import"./Symbols-BV4zxwPS.js";const Ae={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                <RechartsHookInspector />
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Re=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Re as __namedExportsOrder,Ae as default};
