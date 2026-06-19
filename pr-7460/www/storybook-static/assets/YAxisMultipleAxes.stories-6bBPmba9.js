import{R as t}from"./iframe-C7jIZL6o.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-w5VbFl9t.js";import{R as l}from"./zIndexSlice-BnlSqkDK.js";import{C as x}from"./ComposedChart-BKTk_vyX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ay8FbuMt.js";import{L as a}from"./Line-Bf1usTbh.js";import{X as c}from"./XAxis-CTYxjOVZ.js";import{T as g}from"./Tooltip-D-pnF2SG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-H_VCaiK7.js";import"./CartesianAxis-iRUdZDvI.js";import"./Layer-BCVE1kDT.js";import"./resolveDefaultProps-DUb7sDlC.js";import"./Text-olerkQs4.js";import"./DOMUtils-yTKptuJ8.js";import"./isWellBehavedNumber-C3vUk83l.js";import"./Label-D0um-vtH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRAdfR1Z.js";import"./index-B3xQbeZu.js";import"./index-Bovuavvd.js";import"./types-DLi_I9qn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Birh5NDk.js";import"./immer-BOr4g5Y7.js";import"./RechartsWrapper-Dl0_CiQp.js";import"./index-B-BRc6T6.js";import"./index-B9TBnend.js";import"./axisSelectors-EwOPdfxu.js";import"./d3-scale-CRcY7xoU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DrR5EsNs.js";import"./chartDataContext-CAMuJJ0l.js";import"./CategoricalChart-CUzYs4pg.js";import"./tooltipContext-Dn_wq6oE.js";import"./AnimatedItems-CcF7dW3l.js";import"./useAnimationId-B6ozUAwY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRO6EB0t.js";import"./ActiveShapeUtils-E8cq6prr.js";import"./RegisterGraphicalItemId-D1djZTUZ.js";import"./ErrorBarContext-B42jzrUJ.js";import"./GraphicalItemClipPath-CFgBJqlA.js";import"./SetGraphicalItem-DKs6sIFw.js";import"./getZIndexFromUnknown-DyhbKTqH.js";import"./graphicalItemSelectors-CRIMlrDD.js";import"./Curve-DLQx7WJH.js";import"./step-oAYWHCKP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpiODVVc.js";import"./Dot-BZQ0SxYM.js";import"./getRadiusAndStrokeWidthFromDot-BZg86y5o.js";import"./useElementOffset-CebXInqc.js";import"./uniqBy-jLv--wkj.js";import"./iteratee-Bl16rMt0.js";import"./Cross-SZjOAtge.js";import"./Sector-QSRUbSIX.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
