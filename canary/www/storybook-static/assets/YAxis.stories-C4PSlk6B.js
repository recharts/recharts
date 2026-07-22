import{R as t}from"./iframe-DgJplLvS.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Dq42uhEw.js";import{R as h}from"./zIndexSlice-BEw7ZoBF.js";import{L as A}from"./LineChart-DUISkIjc.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DBabwDzt.js";import{X as f}from"./XAxis-Cv0cLySm.js";import{L as E}from"./Legend-BILwxJ3K.js";import{L as n}from"./Line-DVl-UA0H.js";import{T as v}from"./Tooltip-Diuoded2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-iv3hpdCC.js";import"./Layer-CDKK6jHZ.js";import"./resolveDefaultProps-CgspoxK6.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./Label-DUk5cie5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DezlpkmC.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./types-DgMxxOTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RcICWtpY.js";import"./throttle-BFtjLKgc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DkMI-tV9.js";import"./index-Bwl4xJcj.js";import"./index-DBV_c5tC.js";import"./axisSelectors-YqbMVrI6.js";import"./d3-scale-T7rND5KE.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./Symbols-5r-kjQvx.js";import"./symbol-wGUlUL8e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BA__8TOj.js";import"./uniqBy-BsO6J-fr.js";import"./iteratee-m2OFbEqY.js";import"./Curve-BjTIUQH-.js";import"./step-CkXO2b_C.js";import"./AnimatedItems-hO6Ptiqq.js";import"./useAnimationId-SGeRDQQf.js";import"./ActivePoints-Dudi51yy.js";import"./Dot-CJqaNK4q.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./getRadiusAndStrokeWidthFromDot-DkNcCvt4.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./Cross-dkc1C4KG.js";import"./Rectangle-BkNYTIw0.js";import"./util-Dxo8gN5i.js";import"./Sector-DOS1I4Dx.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Wt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Wt as __namedExportsOrder,St as default};
