import{R as t}from"./iframe-BPaILHrg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CZAlOOP6.js";import{R as l}from"./zIndexSlice-Bmw1fph3.js";import{C as x}from"./ComposedChart-DU4uZiCB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bm1zRaSc.js";import{L as a}from"./Line-cHlCiH4v.js";import{X as c}from"./XAxis-Bp49XRaF.js";import{T as g}from"./Tooltip-Cs06hDj9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-r7ey19qR.js";import"./Text-CtKpv6li.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./throttle-B9kMlkpl.js";import"./axisSelectors-BgmzCmWH.js";import"./d3-scale-CvctqLlv.js";import"./CartesianAxis-DqZBHpVR.js";import"./Layer-BYN-xjEA.js";import"./types-DUbTKtwp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D7MXGog1.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./LabelList-BA53HbEo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zVYi39zS.js";import"./useAnimationId-BDqdHn7D.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./tooltipContext-B-ibtteN.js";import"./dataEntryStyles-DyygVVmF.js";import"./ErrorBarContext-CUfKSzjm.js";import"./activeStyles-BRvUZ3GA.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getZIndexFromUnknown-8mUt18d_.js";import"./useEffectiveDataKey-Bbwl3GsC.js";import"./omit-CSgZzqcE.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DgfwLhV2.js";import"./step-D2WZnOIE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BAgIMyf9.js";import"./Dot-Eg6Ew0GK.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./getRadiusAndStrokeWidthFromDot-DTWprENN.js";import"./useElementOffset-CYi5LIP9.js";import"./uniqBy-CQUkPewS.js";import"./iteratee-BSjHlBKG.js";import"./Cross-s4IhzTKS.js";import"./Sector-BsE-OmPw.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
