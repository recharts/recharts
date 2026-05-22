import{e as t}from"./iframe-osYa99rW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CPpRvup6.js";import{g as l}from"./arrayEqualityCheck-DVAn2Veo.js";import{C as x}from"./ComposedChart-Bt-pX0Ef.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-eb2JVbmy.js";import{L as a}from"./Line-C2qsCCMD.js";import{X as A}from"./XAxis-DB9q536o.js";import{T as g}from"./Tooltip-m7Vdw8eH.js";import{R as f}from"./RechartsHookInspector-VtrkbRKP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C67x0626.js";import"./Layer-gnKUTyol.js";import"./resolveDefaultProps-e5wzBDkv.js";import"./Text-BLYIGASS.js";import"./DOMUtils-DNI7arDM.js";import"./Label-DAoBltIG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kQ2XKLeS.js";import"./zIndexSlice-DbxduRWl.js";import"./immer-C4kOpB_4.js";import"./types-D2LtkD4l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Jw-bjgRX.js";import"./hooks-CbohzQKL.js";import"./axisSelectors-jckpyKNb.js";import"./d3-scale-BGIasGRq.js";import"./RechartsWrapper-C7HrPqDt.js";import"./index-FVmQP7oK.js";import"./CartesianChart-qVL1bhzD.js";import"./chartDataContext-CTr_Fr3F.js";import"./CategoricalChart-KWj4YaNg.js";import"./tooltipContext-Kf00ZWJb.js";import"./ReactUtils-Dd2jwjm5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D30liOk0.js";import"./useAnimationId-CKNV6DVG.js";import"./ActiveShapeUtils-CUIK7NEg.js";import"./RegisterGraphicalItemId-rIlloXLK.js";import"./ErrorBarContext-Xd9mG_11.js";import"./GraphicalItemClipPath-BJe2Wn_o.js";import"./SetGraphicalItem-DW948_Jf.js";import"./getZIndexFromUnknown-DZu776jJ.js";import"./graphicalItemSelectors-Bsnlubi7.js";import"./Curve-DMV5yuc6.js";import"./step-BBN71zyD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-42Our513.js";import"./Dot-DRU2iJQo.js";import"./getRadiusAndStrokeWidthFromDot-CGiLTsNp.js";import"./useElementOffset-CZMoOZsh.js";import"./uniqBy-BYcGXJeH.js";import"./iteratee-DEaJE3ja.js";import"./Cross-JcJX91if.js";import"./Sector-_rfV5uw6.js";import"./index-DXz8B56j.js";import"./ChartSizeDimensions-Cg7YHQ1i.js";import"./OffsetShower-DqXXwFDQ.js";import"./PlotAreaShower-CXw6zCF-.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
