import{R as t}from"./iframe-Bzny_MYO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CJm4ZJgn.js";import{R as l}from"./zIndexSlice-MTgyOxcR.js";import{C as x}from"./ComposedChart-C-U97YwV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ikM8WtMT.js";import{L as a}from"./Line-nynINyW7.js";import{X as c}from"./XAxis-D652bNH-.js";import{T as g}from"./Tooltip-foEeq-Dg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DTuGlMPs.js";import"./Text-fNDWB5Io.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./throttle-GvTGKSCT.js";import"./axisSelectors-BEccdncb.js";import"./d3-scale-CLm70OA6.js";import"./CartesianAxis-CF7trjb7.js";import"./Layer-DwImaMiy.js";import"./types-DppBMtwl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwCbU-k0.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./LabelList-DP5qLQcH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIffJDOA.js";import"./useAnimationId-DPjHdwMC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./tooltipContext-Iz_t1CFH.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./ErrorBarContext-B5xatTad.js";import"./activeStyles-D4lYsebj.js";import"./SetGraphicalItem-C8_kNIod.js";import"./getZIndexFromUnknown-Cj4bG7xW.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./omit-xpSuvOOd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DvxHsU-S.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-7LmcTnxb.js";import"./Dot-B0SoNECw.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./getRadiusAndStrokeWidthFromDot-B5e8MQ8V.js";import"./useElementOffset-ZYBSOkTe.js";import"./uniqBy-CmMRn8Xg.js";import"./iteratee-DzeYmEiw.js";import"./Cross-DaNX623z.js";import"./Sector-0HEjef0D.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
