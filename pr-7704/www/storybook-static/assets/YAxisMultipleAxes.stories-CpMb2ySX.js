import{R as t}from"./iframe-CVDCphxx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BxEmWMWe.js";import{R as l}from"./zIndexSlice-D76eaAVt.js";import{C as x}from"./ComposedChart-CVNLcY4v.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-zmWu46zM.js";import{L as a}from"./Line-CBX_YG-s.js";import{X as c}from"./XAxis-BaXZzVL8.js";import{T as g}from"./Tooltip-Bd8tlp4z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CplunMl3.js";import"./Text-Dgr5qdov.js";import"./resolveDefaultProps-B_5oDYmC.js";import"./DOMUtils-DF_qw-1b.js";import"./isWellBehavedNumber-DVmFYWt0.js";import"./useId-CWzKPTKL.js";import"./useBackwardsCompatibleTheme-MdPX2i5n.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeV_pa6H.js";import"./index-BJO-ep7J.js";import"./index-BpxiUomY.js";import"./RechartsWrapper-DEnb7ufM.js";import"./axisSelectors-ChjpNCZD.js";import"./throttle-t8E79NJX.js";import"./d3-scale-Cu204p6o.js";import"./index-CihE6hhr.js";import"./index-DCMHKzI9.js";import"./renderedTicksSlice-B1XRs7d0.js";import"./index-BJY-g_ad.js";import"./CartesianAxis-BZu_fnrb.js";import"./Layer-CMIguF8f.js";import"./types-qF5qaMWi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D47jpHMU.js";import"./chartDataContext-C-FdSEwK.js";import"./CategoricalChart-D7b0lra6.js";import"./AnimatedItems-BHXlTf3v.js";import"./useAnimationId-Bwtwv5PP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-g52yuu9_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BczdQoPB.js";import"./tooltipContext-D9nws42x.js";import"./RegisterGraphicalItemId-z4StfXHb.js";import"./ErrorBarContext-Dl0aWSaL.js";import"./GraphicalItemClipPath-C3-aN0c_.js";import"./SetGraphicalItem-Xr4kmH_o.js";import"./getZIndexFromUnknown-Dj8bIyb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CJ6oKWPg.js";import"./Curve-BAi3bHUk.js";import"./step-CnFrEUK7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-wrDHu4bh.js";import"./Dot-DSiQ3Q_z.js";import"./getRadiusAndStrokeWidthFromDot-BWSKjGaB.js";import"./useElementOffset-Dlxs2KSy.js";import"./uniqBy-BQLa7Owx.js";import"./iteratee-BocsKiRY.js";import"./Cross-BCjVITdc.js";import"./Sector-BxAve4eq.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
