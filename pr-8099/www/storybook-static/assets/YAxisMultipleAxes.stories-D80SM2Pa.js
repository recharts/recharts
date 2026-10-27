import{R as t}from"./iframe-tjocxRUU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CC3Fea7J.js";import{R as l}from"./zIndexSlice-Dxy8HPki.js";import{C as x}from"./ComposedChart-D8w-MoC_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BH4xSSZn.js";import{L as a}from"./Line-D_gGwljF.js";import{X as c}from"./XAxis-Ds3HH0B9.js";import{T as g}from"./Tooltip-Vo_i0ifx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDvz32IL.js";import"./Text-DmRL3-09.js";import"./resolveDefaultProps-BcfnasjV.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D1WllP0e.js";import"./throttle-BtJBXhY8.js";import"./dataEntryStyles-D26LCbZx.js";import"./axisSelectors-Bh1ZEFRN.js";import"./d3-scale-DxsTJ-Fh.js";import"./CartesianAxis-DzErZjsk.js";import"./Layer-YyRceVq5.js";import"./types-C53JcC0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CFmoW3Jf.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./LabelList-C2EwX980.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nUsjOQfN.js";import"./useAnimationId-g7Nwbj-R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./tooltipContext-DoMXm-JT.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./activeStyles-BO5quCC2.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getZIndexFromUnknown-B9nrNTyo.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./omit-CcbPjjvC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D8fqT8cR.js";import"./step-BxgewTFX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CR8eCzMX.js";import"./Dot-C1-AWakF.js";import"./Symbols-eM89l6Zr.js";import"./symbol-aequuKRH.js";import"./getRadiusAndStrokeWidthFromDot-wnLtIjnO.js";import"./useElementOffset-Cwd9kaUJ.js";import"./uniqBy-CCosKpyN.js";import"./iteratee-BVYnyUcL.js";import"./Cross-A6Z2fQ3g.js";import"./Sector-B1OZU1uB.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
