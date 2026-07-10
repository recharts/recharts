import{R as t}from"./iframe-BRR_Yx3q.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DT9J28i-.js";import{R as l}from"./zIndexSlice-2cKWUmx1.js";import{C as x}from"./ComposedChart-BrQA-1mf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ZNSun0S3.js";import{L as a}from"./Line-DrAvxDeD.js";import{X as c}from"./XAxis-D2YOv_sk.js";import{T as g}from"./Tooltip-36Xd1zAl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CtRqWNRX.js";import"./Layer-DEnO1k0R.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./Label-BFmCxOLP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_gUHSFj.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./types-DUTL6gmw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./throttle-9Cm-XaBZ.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./index-CJWeDOqD.js";import"./axisSelectors-BvSj2dv3.js";import"./d3-scale-DiG9HsKp.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./tooltipContext-Dd3NVMXv.js";import"./AnimatedItems-BTME76kn.js";import"./useAnimationId-C1SKzxsx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzyNBMZ7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./ErrorBarContext-DKxut-kF.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";import"./getZIndexFromUnknown-2GicE75J.js";import"./graphicalItemSelectors-BBSGChtr.js";import"./Curve-CgfofNr-.js";import"./step-DD-M69WZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Du_pXw62.js";import"./Dot-RhTFr113.js";import"./getRadiusAndStrokeWidthFromDot-CtiaEZzs.js";import"./useElementOffset-DhJ2uqTW.js";import"./uniqBy-skO6ce2Q.js";import"./iteratee-jFm--KAQ.js";import"./Cross-BJ3_Pen8.js";import"./Sector-C_wGj4XA.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
