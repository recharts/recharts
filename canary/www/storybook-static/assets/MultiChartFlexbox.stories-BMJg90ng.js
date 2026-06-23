import{R as e}from"./iframe-B-rX_Ovq.js";import{A as r}from"./AreaChart-B46PrubI.js";import{R as n}from"./zIndexSlice-BsQifls5.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BFrBqPSh.js";import{X as i}from"./XAxis-SdNRN-8o.js";import{Y as m}from"./YAxis-Cicu2WWw.js";import{A as l}from"./Area-CYlMqbDU.js";import{T as s}from"./Tooltip-DetbqLdq.js";import{L as f}from"./LineChart-DRXkRSKX.js";import{L as x}from"./Line-BuWbSkCp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCnMK_aC.js";import"./index-chviYFta.js";import"./index-CpJc3r_b.js";import"./index-D2kGKgGj.js";import"./index-Bh_-T13z.js";import"./immer-DYOeNz8_.js";import"./get-DdRsJrM-.js";import"./renderedTicksSlice-DQrcKm6F.js";import"./axisSelectors-CfXFgmuu.js";import"./d3-scale-DG2A9yU0.js";import"./resolveDefaultProps-D1pz5wzG.js";import"./isWellBehavedNumber-DgpUmT_-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Hr6f_olX.js";import"./chartDataContext-CWp3X-kc.js";import"./CategoricalChart-BH_EAWmt.js";import"./CartesianAxis-Cxy1JVbR.js";import"./Layer-BzDAHWqw.js";import"./Text-CbyfEyi5.js";import"./DOMUtils-CImWbOuY.js";import"./Label-CL0zassZ.js";import"./ZIndexLayer-CFxBNrtU.js";import"./types-BrxUVIV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C_X3btbZ.js";import"./useAnimationId-Bc7mMz9I.js";import"./ActivePoints-CPbnnH6m.js";import"./Dot-CQVjNDgk.js";import"./RegisterGraphicalItemId-DRp7yt-Z.js";import"./GraphicalItemClipPath-gUtT7Str.js";import"./SetGraphicalItem-mNTSaJYY.js";import"./getRadiusAndStrokeWidthFromDot-CJuF-Sfd.js";import"./ActiveShapeUtils-Cb8N5twM.js";import"./Curve-T3BWQcql.js";import"./step-h3zMWkhs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D_FjOrWh.js";import"./useElementOffset-C_sA79AG.js";import"./uniqBy-CFa47bhd.js";import"./iteratee-B4Wcwj0D.js";import"./Cross-DWFZy1fI.js";import"./Rectangle-BNA8eQFW.js";import"./util-Dxo8gN5i.js";import"./Sector-UhwsFj4Q.js";import"./ErrorBarContext-D1MAgXEd.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
