import{R as t}from"./iframe-DXKzzws4.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-rHqCYw2v.js";import{R as h}from"./zIndexSlice-DMX8Hhzz.js";import{L as A}from"./LineChart-B_HT4_qO.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-dn8jQool.js";import{X as f}from"./XAxis-B7JoDVaz.js";import{L as E}from"./Legend-QcCiTVJb.js";import{L as n}from"./Line-CqA0P4v1.js";import{T as v}from"./Tooltip-BgqWabVR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CVHxu40z.js";import"./Layer-C_ZH39cx.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./isWellBehavedNumber-C7AyK_9S.js";import"./Label-C30Q7qcI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMaU0WuF.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./types-BceUICSF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-egJwNk4f.js";import"./throttle-BD3oF8Du.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CAtabfYs.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./axisSelectors-v3JljGjn.js";import"./d3-scale-DYAtoVGZ.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./Symbols-COmsubEa.js";import"./symbol-BUlFMA9I.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BqV11enm.js";import"./uniqBy-CUADLInF.js";import"./iteratee-CHkUkcds.js";import"./Curve-DmVGde8u.js";import"./step-BR5H3S21.js";import"./AnimatedItems-DnXQuXZD.js";import"./useAnimationId-DeOyrvrW.js";import"./ActivePoints-CSBiBk5C.js";import"./Dot-sf8y4IWV.js";import"./RegisterGraphicalItemId-CW1tA6c4.js";import"./ErrorBarContext-CuLgZ_wX.js";import"./GraphicalItemClipPath-C72bnPxn.js";import"./SetGraphicalItem-CYGj1XVR.js";import"./getRadiusAndStrokeWidthFromDot-BvNGRFfN.js";import"./ActiveShapeUtils-D95WmeDO.js";import"./Cross-5OJntGQy.js";import"./Rectangle-DKjzEYBW.js";import"./util-Dxo8gN5i.js";import"./Sector-G5hJhTYV.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
