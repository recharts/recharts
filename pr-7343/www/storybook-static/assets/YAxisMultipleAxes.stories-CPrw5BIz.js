import{e as t}from"./iframe-CuZPGzPC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CPd7xvrx.js";import{g as l}from"./arrayEqualityCheck-0ArgbeWo.js";import{C as x}from"./ComposedChart-O8LQGjYj.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DaTRbSo9.js";import{L as a}from"./Line-Cco-oGoS.js";import{X as A}from"./XAxis-BZ1tAbJs.js";import{T as g}from"./Tooltip-erkhyRmN.js";import{R as f}from"./RechartsHookInspector-zRKZmo0i.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CfFX5JcQ.js";import"./Layer-D8WyiXT0.js";import"./resolveDefaultProps-Bk_EQyDM.js";import"./Text-zA_9GeJ1.js";import"./DOMUtils-BikjfFYx.js";import"./Label-zspUhklU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4dYONTA.js";import"./zIndexSlice-BDdD7Z6D.js";import"./immer-YqkYbV94.js";import"./types-DTMUikhY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CZA7_M_S.js";import"./hooks-CtSYEaPh.js";import"./axisSelectors-DJmfaPi-.js";import"./d3-scale-DFAjRXo_.js";import"./RechartsWrapper-B6XKG7Lc.js";import"./index-Cvyduo3w.js";import"./CartesianChart-DorQ2AK5.js";import"./chartDataContext-B0jZsWqF.js";import"./CategoricalChart-BXlLUI69.js";import"./tooltipContext-JNkAZsiZ.js";import"./ReactUtils-G6cK3lSP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CX1NIdn4.js";import"./isPlainObject-C_gHiSxR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DjKAtsYL.js";import"./useAnimationId-CevvSFVo.js";import"./Trapezoid-CG3AkdCU.js";import"./Sector-CPKMPiIf.js";import"./Symbols-B_rDkX2s.js";import"./symbol-DmWPr50b.js";import"./step-CqiKd4MR.js";import"./Curve-8oAwKTPO.js";import"./RegisterGraphicalItemId-Bjl2IzLe.js";import"./ErrorBarContext-BiThez5i.js";import"./GraphicalItemClipPath-DUbxYwTC.js";import"./SetGraphicalItem-B2q_jALm.js";import"./getZIndexFromUnknown-Dyme3eNX.js";import"./graphicalItemSelectors-C9V2BJim.js";import"./ActivePoints-3HxEsaWV.js";import"./Dot-BETACs3N.js";import"./getRadiusAndStrokeWidthFromDot-CXvTaXSz.js";import"./useElementOffset--JMWPKnm.js";import"./uniqBy-BObUix_R.js";import"./iteratee-IIg4RS-w.js";import"./Cross-CDHBbcwn.js";import"./index-D_0WpHmK.js";import"./ChartSizeDimensions-Dt2wwaf3.js";import"./OffsetShower-D-8ojbsk.js";import"./PlotAreaShower-D985qYJk.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
