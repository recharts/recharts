import{R as t}from"./iframe-Bc_TQ7zr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dbf9f4fH.js";import{R as l}from"./zIndexSlice-CO4_damr.js";import{C as x}from"./ComposedChart-GKyMiMHY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BHY-K6dY.js";import{L as a}from"./Line-Drv4Jn_f.js";import{X as c}from"./XAxis-DWAumGqR.js";import{T as g}from"./Tooltip-9IBuq1vJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B9G7W81w.js";import"./Text-DL7i-IN9.js";import"./resolveDefaultProps-urKJAClX.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./throttle-DHt3nTHd.js";import"./axisSelectors-BQX-Wl7f.js";import"./d3-scale-2JXHcyFQ.js";import"./CartesianAxis-C2icTJ4e.js";import"./Layer-Pn8de_pX.js";import"./types-CI1g0QBx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./LabelList-aO6gLBJB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4HzsWKb.js";import"./useAnimationId-BaQxjUGX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./tooltipContext-DzjzWl1v.js";import"./dataEntryStyles-CcDBy8RW.js";import"./ErrorBarContext-C3uNXZgX.js";import"./activeStyles-CqnjEaUo.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getZIndexFromUnknown-hxP-NfEd.js";import"./useEffectiveDataKey-BSvuchOk.js";import"./omit-CqoR7aV0.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BkI7sWgu.js";import"./step-Bz4sQ0ke.js";import"./path-DyVhHtw_.js";import"./ActivePoints-lBMg9AK3.js";import"./Dot-BVzb9xNA.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./getRadiusAndStrokeWidthFromDot-CL0rbQkZ.js";import"./useElementOffset-6rTFYDIL.js";import"./uniqBy-euoVOqhK.js";import"./iteratee-KP71SW6w.js";import"./Cross-zt8H4zmm.js";import"./Sector-QL_PXW4W.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
