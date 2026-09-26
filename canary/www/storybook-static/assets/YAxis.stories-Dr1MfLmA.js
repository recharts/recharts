import{R as t}from"./iframe-B-cvRuUs.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D8dVEXO3.js";import{R as h}from"./zIndexSlice-CMjvBZBG.js";import{L as A}from"./LineChart-BdpW0czq.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-hub3z3UL.js";import{X as f}from"./XAxis-y94IxigF.js";import{L as E}from"./Legend-Cjy-igUs.js";import{L as i}from"./Line-Csl9Oq_s.js";import{T as v}from"./Tooltip-BWN-i7lv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-vDwlhiVA.js";import"./Text-CxPZ3A1T.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./DOMUtils-3oIj9XlO.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLKwVcRH.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./RechartsWrapper-Sn-pOtLi.js";import"./axisSelectors-BWIhKYR0.js";import"./throttle-CDbcUl2N.js";import"./d3-scale-DR_59xyj.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./index-43fZ4l-Z.js";import"./CartesianAxis-k7ozjxp6.js";import"./Layer-BuVUUS9m.js";import"./types-BMpC1VHb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./Symbols-DpS-Xr6D.js";import"./symbol-C7VPsUTZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRlCn3Qn.js";import"./uniqBy-BHcpSUT2.js";import"./iteratee-DJT2RpEq.js";import"./Curve-BQq91RH8.js";import"./step-D9kLagG3.js";import"./AnimatedItems-Dsd4czhw.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./ActivePoints-CQAXHfdf.js";import"./Dot-F1dblK_0.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./ErrorBarContext-B6INZz-c.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getRadiusAndStrokeWidthFromDot-B-dIKKPR.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./useGraphicalItemIdentity-BfmGadKt.js";import"./Cross-ClEG0Ca2.js";import"./Rectangle-kx2mJ5WN.js";import"./util-Dxo8gN5i.js";import"./Sector-2VsF8zh6.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
