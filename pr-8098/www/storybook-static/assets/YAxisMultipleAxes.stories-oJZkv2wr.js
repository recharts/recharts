import{R as t}from"./iframe-D4oHTXd2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BYtNm8pH.js";import{R as l}from"./zIndexSlice-FaOQzDXI.js";import{C as x}from"./ComposedChart-D_8jOcv5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bnf9mtw2.js";import{L as a}from"./Line-icQsYXEb.js";import{X as c}from"./XAxis--JtbYt43.js";import{T as g}from"./Tooltip-V4ocUqZm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DP7jFvS8.js";import"./Text-CD7lZJQl.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./throttle-IWj5GY0g.js";import"./dataEntryStyles-CDeLNDqG.js";import"./axisSelectors-CDRP_sNf.js";import"./d3-scale-C56RpY6Y.js";import"./CartesianAxis-Ck0BSfZw.js";import"./Layer-Cc-amHQh.js";import"./types-D44DYR1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDz0Qovh.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./LabelList-hm91Y5t7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUbFm90a.js";import"./useAnimationId-DDFQzbLJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./tooltipContext-Dg_R1Yo_.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./ErrorBarContext-BjrF48Vy.js";import"./activeStyles-BnisSvy3.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./getZIndexFromUnknown-QWb5nb3d.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./omit-C1TSx5SV.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B88JiAwJ.js";import"./step-hZT5qMl0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D0g5NkQl.js";import"./Dot-7MN5UfYI.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./getRadiusAndStrokeWidthFromDot-jULpS_BY.js";import"./useElementOffset-DyenIFMf.js";import"./uniqBy-DxBxaEGL.js";import"./iteratee-B-_7egyo.js";import"./Cross-BTVpfL3S.js";import"./Sector-B5EL7_ii.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
