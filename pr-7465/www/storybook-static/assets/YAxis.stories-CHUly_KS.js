import{R as t}from"./iframe-C_T02oQn.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CAA9Sn25.js";import{R as h}from"./zIndexSlice-PaMIo_4H.js";import{L as A}from"./LineChart-gaPBcPpD.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-JkXasBLp.js";import{X as f}from"./XAxis-9hDWnVEM.js";import{L as E}from"./Legend-BSh8bNuS.js";import{L as n}from"./Line-Bkm0IHhG.js";import{T as v}from"./Tooltip-CzaIn816.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C7erGA50.js";import"./CartesianAxis-Du2JQot0.js";import"./Layer-DjmjZ8nK.js";import"./resolveDefaultProps-m_js62KJ.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./Label-PISAROHv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEphblF2.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./types-BgdJMLXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./immer-B6lblpQa.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./axisSelectors-BhG2tLgr.js";import"./d3-scale-BkdgfgBA.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BDn-adSN.js";import"./chartDataContext-BpZSWeLp.js";import"./CategoricalChart-DJkiCneY.js";import"./Symbols-uE90l84i.js";import"./symbol-CvYDruQ3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhbYobY7.js";import"./uniqBy-CWJ7W0V1.js";import"./iteratee-CidJxIEL.js";import"./Curve-YTaF5YAP.js";import"./step-DxTezoeO.js";import"./AnimatedItems-BUXgV9u-.js";import"./useAnimationId-BP6MXfIJ.js";import"./ActivePoints-wYW31SoX.js";import"./Dot-BqWNwI4e.js";import"./RegisterGraphicalItemId-CLd-qaBQ.js";import"./ErrorBarContext-BlU25AOm.js";import"./GraphicalItemClipPath-hcKIGZeq.js";import"./SetGraphicalItem-CYOjbzSp.js";import"./getRadiusAndStrokeWidthFromDot-BgRiSanx.js";import"./ActiveShapeUtils-CWkOqTvX.js";import"./Cross-Cxjm4Cmv.js";import"./Rectangle-C_fFb_u8.js";import"./Sector-_x2Ka2K-.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
