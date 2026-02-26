import{e as t}from"./iframe-CJQnRCN7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-Bx_UxG-b.js";import{R as l}from"./arrayEqualityCheck-DcQtyVca.js";import{C as x}from"./ComposedChart-DY1EoIsB.js";import{B as o}from"./Bar-DeH7NGmx.js";import{L as a}from"./Line-CK6_c6B6.js";import{X as c}from"./XAxis-DGEO6QJA.js";import{T as A}from"./Tooltip-QIQBaDRZ.js";import{R as g}from"./RechartsHookInspector-DQZJ1VRL.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CA-DoWhq.js";import"./Layer-B-568WrD.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./Label-C1IYMHDK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBz_ncGo.js";import"./zIndexSlice-D7pH0QjK.js";import"./immer-pCuW_8mX.js";import"./types-Bb5s1IIN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-6is9WC9q.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./index-D1Dxg2z1.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./tooltipContext-LQxmXr66.js";import"./ReactUtils-BMRDQSQL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Al5O4_0X.js";import"./isPlainObject-Cy53febZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIClz7bW.js";import"./useAnimationId-Btjbf-3C.js";import"./Trapezoid-DO_o8qI8.js";import"./Sector-DPKTnHdo.js";import"./Symbols-BqZb3kY5.js";import"./symbol-CVXqLImo.js";import"./step-xPk2jUCK.js";import"./Curve-ClJjpRlb.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./ErrorBarContext-WcfhBNrP.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./getZIndexFromUnknown-i5cVFBrS.js";import"./graphicalItemSelectors-BaRYOFQQ.js";import"./ActivePoints-0FO4QfDc.js";import"./Dot-DVt8NYvp.js";import"./getRadiusAndStrokeWidthFromDot-27Jzsgzj.js";import"./useElementOffset-DS1TYk1g.js";import"./uniqBy-CVqqkYEQ.js";import"./iteratee-tQQnC2SF.js";import"./Cross-PSTvbWDH.js";import"./index-BmBTwCFz.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./OffsetShower-Bp1qc7mw.js";import"./PlotAreaShower-DPY3URo4.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
