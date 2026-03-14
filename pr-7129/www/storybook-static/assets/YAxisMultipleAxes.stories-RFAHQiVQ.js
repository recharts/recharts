import{e as t}from"./iframe-3667Tvz2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DW4WG6ok.js";import{R as l}from"./arrayEqualityCheck-D9OvKJwD.js";import{C as x}from"./ComposedChart-DwAm-CG0.js";import{B as o}from"./Bar-B1C1yyJt.js";import{L as a}from"./Line-D4SOJls3.js";import{X as c}from"./XAxis-BpxRjWnh.js";import{T as A}from"./Tooltip-CDV62SER.js";import{R as g}from"./RechartsHookInspector-CJCnB7_4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C27eZMEL.js";import"./Layer-DkCxZ1Nm.js";import"./resolveDefaultProps-BtuJUOf7.js";import"./Text-BJUXCfBk.js";import"./DOMUtils-CXQ8jzVY.js";import"./Label-BZ-HO-n4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQkUzdJa.js";import"./zIndexSlice-T5ACl1fd.js";import"./immer-UKt74SqS.js";import"./types-B-N1LhIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-AmLe9sEW.js";import"./hooks-BZsQuy7Q.js";import"./axisSelectors-DQHNBIMP.js";import"./d3-scale-DGzXDIH7.js";import"./RechartsWrapper-oIAnzkqM.js";import"./index-C4SUCtnx.js";import"./CartesianChart-DujR4c01.js";import"./chartDataContext-DwqmBR6M.js";import"./CategoricalChart-BIICkzoQ.js";import"./tooltipContext-C2Im_9CK.js";import"./ReactUtils-BGYookdr.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BGTdwFBk.js";import"./isPlainObject-BNfNO1bM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBZ7nnGZ.js";import"./useAnimationId-QOY8B5bM.js";import"./Trapezoid-BmNjJBFD.js";import"./Sector-DqFdBDD-.js";import"./Symbols-Dz33hGQT.js";import"./symbol-DLtpIQQd.js";import"./step-DREQNBhH.js";import"./Curve-BaNFvaPx.js";import"./RegisterGraphicalItemId-6KUqIGYl.js";import"./ErrorBarContext-f546Mx0J.js";import"./GraphicalItemClipPath-B2jRUZRX.js";import"./SetGraphicalItem-9InqSUgs.js";import"./getZIndexFromUnknown-BpiGpBWq.js";import"./graphicalItemSelectors-DVTwV7Bz.js";import"./ActivePoints-uWw7uTV8.js";import"./Dot-CliWMADJ.js";import"./getRadiusAndStrokeWidthFromDot-knWG_owO.js";import"./useElementOffset-BBj3jhiQ.js";import"./uniqBy-D-QVLyY1.js";import"./iteratee-esNjAKiM.js";import"./Cross-8LVQ3THK.js";import"./index-BoqoSvrt.js";import"./ChartSizeDimensions-rVAYYRrn.js";import"./OffsetShower-DYHCblSP.js";import"./PlotAreaShower-BlEzOlOg.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
