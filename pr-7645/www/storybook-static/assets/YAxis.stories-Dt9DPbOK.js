import{R as t}from"./iframe-Ci96e1sZ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BeupBiv_.js";import{R as h}from"./zIndexSlice-B1EQFXas.js";import{L as A}from"./LineChart-CFSpypWG.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CUhXlyIq.js";import{X as f}from"./XAxis-sNeLDR5W.js";import{L as E}from"./Legend-BCp85ZfU.js";import{L as n}from"./Line-CNdoo1PD.js";import{T as v}from"./Tooltip-CZO2G-iO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CF4xlS6j.js";import"./Text-B3nSPEiT.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./DOMUtils-BbVSTVZx.js";import"./isWellBehavedNumber-CF2GCTfq.js";import"./useBackwardsCompatibleTheme-D2Fw4B1K.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DwZny_eu.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./index-DH9mueDN.js";import"./throttle-Dnh15uFS.js";import"./axisSelectors-Bjs83WTa.js";import"./d3-scale-B0NLrUrx.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./CartesianAxis-D8l6BhAe.js";import"./Layer-CZ2F14sW.js";import"./types-D2o80dZ0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CCAPJMRK.js";import"./chartDataContext-BYKHEhUl.js";import"./CategoricalChart--GJhAkst.js";import"./Symbols-Di4l6aUk.js";import"./symbol-DrFKkU6g.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BdkJ1pFB.js";import"./uniqBy-CHZeAJXB.js";import"./iteratee-C-mJOptL.js";import"./Curve-BysAQY9m.js";import"./step-pm8cM45a.js";import"./AnimatedItems-BGUr9OQF.js";import"./useAnimationId-BzCTa_4t.js";import"./ActivePoints-CcMPEi3Q.js";import"./Dot-CNczHnMS.js";import"./RegisterGraphicalItemId-CEOZLZl3.js";import"./ErrorBarContext-MBgpuxtH.js";import"./GraphicalItemClipPath-wdGuOIwS.js";import"./SetGraphicalItem-C5ta0dz_.js";import"./getRadiusAndStrokeWidthFromDot-BH_CgfJ4.js";import"./ActiveShapeUtils-Bmp4Kv1_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-3xywc_iZ.js";import"./Rectangle-ELfFl8ZJ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cw_y7PiZ.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
