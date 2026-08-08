import{R as t}from"./iframe-BivO5BoJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CMfIE2am.js";import{R as h}from"./zIndexSlice-Bjz_KcZJ.js";import{L as A}from"./LineChart-CT2CeP2f.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Nd8vuP0W.js";import{X as f}from"./XAxis-CJk4qOf_.js";import{L as E}from"./Legend-B82JAurw.js";import{L as n}from"./Line-DOQ0pUTN.js";import{T as v}from"./Tooltip-T6Mly44j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C7YhLpFH.js";import"./Text-B8O_8yPP.js";import"./resolveDefaultProps-B41TlN8V.js";import"./DOMUtils-CA0Xf545.js";import"./isWellBehavedNumber-BP5BBjcl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-TaYOeXN7.js";import"./index-03GkEewG.js";import"./index-B0o2St2z.js";import"./RechartsWrapper-DFOf-gVb.js";import"./index-DdI5aF1Z.js";import"./index-eGB7E-8r.js";import"./throttle-BplF9VH1.js";import"./axisSelectors-DhnOFegq.js";import"./d3-scale-oUOyK3d-.js";import"./renderedTicksSlice-CI5d0VIf.js";import"./CartesianAxis-yaWpeoNa.js";import"./Layer-CQraiAmP.js";import"./types-Ci90ji2E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CezfAeyp.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-By-DJA1x.js";import"./chartDataContext-bLv_3jvW.js";import"./CategoricalChart-piOEuQ3H.js";import"./Symbols-Druc529R.js";import"./symbol-CL0lcOqi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B725Ga0q.js";import"./uniqBy-QhayOO9-.js";import"./iteratee-Be5jHE0S.js";import"./Curve-DmB3zN28.js";import"./step-D7AgkVHN.js";import"./AnimatedItems-Daz5NR7w.js";import"./useAnimationId-C4RNTUIo.js";import"./ActivePoints-_kZDvhaZ.js";import"./Dot-BA4sFX2k.js";import"./RegisterGraphicalItemId-CmSKkMyt.js";import"./ErrorBarContext-ChpCgx9m.js";import"./GraphicalItemClipPath-xHJ3Vi6r.js";import"./SetGraphicalItem-D5hw8CGc.js";import"./graphicalItemIdentity-PtVRHa7z.js";import"./ActiveShapeUtils-BWMWU3gW.js";import"./Cross-FKmnnO-n.js";import"./Rectangle-B0xUjER0.js";import"./util-Dxo8gN5i.js";import"./Sector-CjNobHQ5.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
