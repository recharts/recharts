import{R as t}from"./iframe-C20wDroG.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Dregax_Z.js";import{R as h}from"./zIndexSlice-Dn977bIM.js";import{L as A}from"./LineChart-BeuH2A-9.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DhTGlh1s.js";import{X as f}from"./XAxis-bncj55mF.js";import{L as E}from"./Legend-D6Pxhrbc.js";import{L as n}from"./Line-BK0Z6C9x.js";import{T as v}from"./Tooltip-_ToFbj_m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DkS9BWG5.js";import"./Text-DGWMJ0hU.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./DOMUtils-CaGG5Hmm.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPgbR3ka.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./throttle-D_pKwmSO.js";import"./axisSelectors-D2d7y5tB.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./CartesianAxis-BCVPeUYs.js";import"./Layer-DDCJtugd.js";import"./types-BDuMvVkF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./Symbols-CkjYU1xm.js";import"./symbol-BOBSpd1m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dnes-XqG.js";import"./uniqBy-2EVv77Lm.js";import"./iteratee-CfZ0Y8VA.js";import"./Curve-CmAw5S9J.js";import"./step-cmv5QLzJ.js";import"./AnimatedItems-BeGp4Wik.js";import"./useAnimationId-Bc7mxzMe.js";import"./ActivePoints-Bxc8A2aK.js";import"./Dot-tDq1zpNX.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./ErrorBarContext-B7iknVLS.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getRadiusAndStrokeWidthFromDot-BXHe0lbi.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D4jIbQ8y.js";import"./Rectangle-Bmy5AWRQ.js";import"./util-Dxo8gN5i.js";import"./Sector-B3XUnZrl.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
