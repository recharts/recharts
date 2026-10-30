import{R as t}from"./iframe-CO2wyIFg.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DxlVhyz4.js";import{R as h}from"./zIndexSlice-B1dwy21o.js";import{L as A}from"./LineChart-C8EL3dVJ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Bb7vcvcF.js";import{X as f}from"./XAxis-CTUf16qw.js";import{L as E}from"./Legend-DEvqDZHP.js";import{L as i}from"./Line-BQshy5fI.js";import{T as v}from"./Tooltip-D1nNQVkK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DwmonuSB.js";import"./Text-9LTzebQz.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BTrk53y9.js";import"./throttle-Bs5LuV_m.js";import"./axisSelectors-6mrCXm_L.js";import"./d3-scale-CG4Qydf0.js";import"./CartesianAxis-yYNPW19G.js";import"./Layer-3FBX9WCC.js";import"./types-l0n7UaRD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BPn-EIY7.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-CiaG31nz.js";import"./symbol-DdfWm2fk.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BgaObCNr.js";import"./dataEntryStyles-DJf9CEZB.js";import"./useElementOffset-Dv8qg2LV.js";import"./uniqBy-DNvTgJdx.js";import"./iteratee-0AEmZrhj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Bk39tyeQ.js";import"./step-DLHEgf4y.js";import"./LabelList-ZxVwNU5Y.js";import"./ActivePoints-C0WjGSw3.js";import"./Dot-1KNmnTx0.js";import"./activeStyles-C1uCXth5.js";import"./useAnimationId-80VZwTZw.js";import"./ErrorBarContext-BwMCHjXJ.js";import"./SetGraphicalItem-DzHXsKbf.js";import"./getRadiusAndStrokeWidthFromDot-DxWBVjs4.js";import"./ActiveShapeUtils-CJm59VzC.js";import"./useEffectiveDataKey-0oKoD9E-.js";import"./Cross-Cqm6penG.js";import"./Rectangle-BQZYhZHi.js";import"./util-Dxo8gN5i.js";import"./Sector-CAlOeohk.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
