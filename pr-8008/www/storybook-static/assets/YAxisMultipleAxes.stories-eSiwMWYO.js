import{R as t}from"./iframe-R8qakbXa.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ByXOMKUb.js";import{R as l}from"./zIndexSlice-CpW5IUCm.js";import{C as x}from"./ComposedChart-DSL-YeQI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D2CZZrMV.js";import{L as a}from"./Line-C0UZrz4D.js";import{X as c}from"./XAxis-C4Jew8Rv.js";import{T as g}from"./Tooltip-BCWvkX_I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KdqZDMP0.js";import"./Text-DWNopLVO.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./pageBackground-C5CyBpzw.js";import"./isWellBehavedNumber-B09TyYXX.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BembMDFS.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./axisSelectors-DMTHYW2V.js";import"./throttle-B9oD6XZ1.js";import"./d3-scale-aDQi0991.js";import"./CartesianAxis-D_UchkJi.js";import"./Layer-CmAPD_t-.js";import"./types-D_TtzLi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-ClWcdPE7.js";import"./index-Di16hjPT.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./activeStyles-B3GTJvDM.js";import"./useAnimationId-CjllIhER.js";import"./dataEntryStyles-DI0HDDLL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iquA0V0c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./tooltipContext-CmeFo2DA.js";import"./ErrorBarContext-0rDV8hpt.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getZIndexFromUnknown-B1PlbyRn.js";import"./useEffectiveDataKey-DI06uwcg.js";import"./Curve-C-kAiHcE.js";import"./step-BfWCr2W6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bp8whF8k.js";import"./Dot-BkoFNCjF.js";import"./getRadiusAndStrokeWidthFromDot-CMshxAsh.js";import"./useElementOffset-C5Bgs-mL.js";import"./uniqBy-DYQ_KcVA.js";import"./iteratee-CNuCkrqA.js";import"./Cross-DEeio74d.js";import"./Sector-CKO5Jhj4.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
