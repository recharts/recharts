import{R as e}from"./iframe-CB0-Apig.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BkLwCB-i.js";import{R as h}from"./zIndexSlice-MYAc-BZR.js";import{C as g}from"./ComposedChart-Dg8T55Bz.js";import{L as x}from"./Line-CAR7ukmz.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D9ownlTm.js";import{T as V}from"./Tooltip-Dr_4UXD8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DyZuqlDa.js";import"./Layer-Dp8UDcUQ.js";import"./resolveDefaultProps-zQutOK7U.js";import"./Text-B6lqzzDo.js";import"./DOMUtils-B6gqp-ty.js";import"./isWellBehavedNumber-CTvZevfR.js";import"./useId-CWVN7Jyj.js";import"./useBackwardsCompatibleTheme-Db0J--Ta.js";import"./Label-EQpvr0td.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-elhV8gwp.js";import"./index-DsRbpnGV.js";import"./index-zuDkrAQT.js";import"./types-DBJDNIT-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvPVjrK_.js";import"./throttle-B_JaSpEU.js";import"./index-C1lwWxUG.js";import"./index-DTSkq74U.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DVGUOxKt.js";import"./axisSelectors-CXDnm6lL.js";import"./index-DyoNT_fx.js";import"./CartesianChart-BJI6UZNQ.js";import"./chartDataContext-BshA8PFe.js";import"./CategoricalChart-DMYjcOfv.js";import"./Curve-BEFcYSF_.js";import"./step-CjRyMTXy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DE_zCwRM.js";import"./useAnimationId-DZZDX8rQ.js";import"./ActivePoints-Du6zhbn2.js";import"./Dot-5_weME0s.js";import"./RegisterGraphicalItemId-DP4ziMhF.js";import"./ErrorBarContext-B7WUKUL2.js";import"./GraphicalItemClipPath-BfYW0QzE.js";import"./SetGraphicalItem-D-uUzHqS.js";import"./getRadiusAndStrokeWidthFromDot-DVD_PCP2.js";import"./ActiveShapeUtils-C6gEbnuv.js";import"./useGraphicalItemIdentity-CxywVdEz.js";import"./useElementOffset-BgakInc5.js";import"./uniqBy-9j2Lomvv.js";import"./iteratee-CFstGFg2.js";import"./Cross-C7DxwD6R.js";import"./Rectangle-I4VbBUFX.js";import"./util-Dxo8gN5i.js";import"./Sector-BvfQDdur.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
