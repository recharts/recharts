import{R as t}from"./iframe-rYRmlY_w.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BWeWjLFg.js";import{R as h}from"./zIndexSlice-CW9g3Df4.js";import{L as A}from"./LineChart-B_lQRq1z.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-B1mxfGL-.js";import{X as f}from"./XAxis-B2S1kxsc.js";import{L as E}from"./Legend-DTUQ316l.js";import{L as n}from"./Line-OyqWaweM.js";import{T as v}from"./Tooltip-BJy8LCx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C_0fnefy.js";import"./Text-yyeh64ow.js";import"./resolveDefaultProps-BpsYi27l.js";import"./DOMUtils-vuT3ag2A.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjuCBj9U.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./throttle-DMLB0n1a.js";import"./axisSelectors-CawrvlcN.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./CartesianAxis-BPXoMhkW.js";import"./Layer-Dpa7ZKP5.js";import"./types-B2Hj88Lf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./Symbols-hfYUrlaK.js";import"./symbol-Bbig07af.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlBkdftn.js";import"./uniqBy-1Q7zCRmp.js";import"./iteratee-C2W6XbU2.js";import"./Curve-Dde8oLlo.js";import"./step-BmztjEzR.js";import"./AnimatedItems-CIev447X.js";import"./useAnimationId-B08Ps5mJ.js";import"./ActivePoints-BM73sJ66.js";import"./Dot-BJyh6EJc.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./ErrorBarContext-D9hFLWDz.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getRadiusAndStrokeWidthFromDot-rFO_VTeN.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./Cross-Ce6okpil.js";import"./Rectangle-B78Clo56.js";import"./util-Dxo8gN5i.js";import"./Sector-CY7poIyV.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,Wt as default};
