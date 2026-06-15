import{R as t}from"./iframe-sORstnao.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-B0nIj3Rm.js";import{R as h}from"./zIndexSlice-D4nSzQXG.js";import{L as A}from"./LineChart-BGbBpq-B.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CoCW4h36.js";import{X as f}from"./XAxis-CLx5zWj1.js";import{L as E}from"./Legend-DPngQBCv.js";import{L as n}from"./Line-B4Nxznnp.js";import{T as v}from"./Tooltip-Bo23RdJr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-41kC8iMv.js";import"./CartesianAxis-B64g0dZi.js";import"./Layer--egwL1wz.js";import"./resolveDefaultProps-CiA9punn.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./Label-SYMy3G3-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEh4PufB.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./types-iWkEMmGL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./immer-6f0a2Itz.js";import"./RechartsWrapper-D1LnNbdI.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./axisSelectors-Cn-VKMDy.js";import"./d3-scale-D2bjBGPq.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./Symbols-DBkZE3FX.js";import"./symbol-BNlBPIVa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BI2zHJkS.js";import"./uniqBy-DZcIVEUd.js";import"./iteratee-CLUUH9ga.js";import"./Curve-DN6qrrBJ.js";import"./step-BwuKoovG.js";import"./AnimatedItems-CV70jau4.js";import"./useAnimationId-Dc5RekzQ.js";import"./ActivePoints-DgX9BosL.js";import"./Dot-EjXLgxI9.js";import"./RegisterGraphicalItemId-CV0Blp2K.js";import"./ErrorBarContext-DTHknnLU.js";import"./GraphicalItemClipPath-B7hrgjyT.js";import"./SetGraphicalItem-BWtqlZ1x.js";import"./getRadiusAndStrokeWidthFromDot-Ce5hKttK.js";import"./ActiveShapeUtils-C6v-Gqt7.js";import"./Cross-BjZK5vKu.js";import"./Rectangle-CIsVQIpM.js";import"./Sector-Da8ZKB8T.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
