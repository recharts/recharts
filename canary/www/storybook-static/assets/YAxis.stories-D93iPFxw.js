import{R as t}from"./iframe-BPne-Hl-.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-C0fNq5VI.js";import{R as h}from"./zIndexSlice-Vbxajxxh.js";import{L as A}from"./LineChart-DLc4rpuH.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-btbBUur8.js";import{X as f}from"./XAxis-rRwDqEnY.js";import{L as E}from"./Legend-CbVrBR9Z.js";import{L as n}from"./Line-BF3gtbV4.js";import{T as v}from"./Tooltip-9yXvT-wW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BrzCwn25.js";import"./Text-C95v_Vb1.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./DOMUtils-J3bqy14P.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfzxMoSO.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./throttle-Bi_zW3_L.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./CartesianAxis-ClYaFBOz.js";import"./Layer-SpL-rjyd.js";import"./types-BUNHJ5Kw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./Symbols-BRthCvHo.js";import"./symbol-BqX0FdKg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dphqCukD.js";import"./uniqBy-B3LW5wu3.js";import"./iteratee-DPXVHfHy.js";import"./Curve-DxMSvAJ7.js";import"./step-BuUE8tSH.js";import"./AnimatedItems-BPcfKqDa.js";import"./useAnimationId-Bq5h4Na4.js";import"./ActivePoints-vna83Vpl.js";import"./Dot-_aT20vJp.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./ErrorBarContext-DTKdWH8V.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getRadiusAndStrokeWidthFromDot-DdxPvC-_.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D0wtR-3X.js";import"./Rectangle-Cn7G2-_l.js";import"./util-Dxo8gN5i.js";import"./Sector-DtWXAxPH.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const jt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
