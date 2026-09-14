import{R as e}from"./iframe-BWDwgK_D.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CrYBQ4mi.js";import{R as h}from"./zIndexSlice-C1O5MBWY.js";import{C as g}from"./ComposedChart-CGi5sLu_.js";import{L as x}from"./Line-B2_MzMwu.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BpMJuDGQ.js";import{T as V}from"./Tooltip-CAgdJnhO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CMJX9mZH.js";import"./Layer-DAcTuudf.js";import"./resolveDefaultProps-Bp_p1EHk.js";import"./Text-BizBnj_T.js";import"./DOMUtils-iBBTwtfH.js";import"./isWellBehavedNumber-WNu-UqrG.js";import"./useId-D1g06gFI.js";import"./useBackwardsCompatibleTheme-BYeMUCh_.js";import"./Label-BKEGIlSz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRdRjEOe.js";import"./index-B49xXNHt.js";import"./index-CCaysGPM.js";import"./types-loTHP4vv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xUJav-aw.js";import"./throttle-BcZmZghI.js";import"./index-kktikCBK.js";import"./index-DFG57tTU.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DvAFqpAd.js";import"./axisSelectors-e9-Lmas5.js";import"./index-y3EgPNWn.js";import"./CartesianChart-B6ulmZoL.js";import"./chartDataContext-D0xRn858.js";import"./CategoricalChart-D3lIPbNt.js";import"./Curve-BJ0_3V4P.js";import"./step-BAFgT2Gg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BustB_TV.js";import"./useAnimationId-_CO00dkp.js";import"./ActivePoints-nPDtSH3W.js";import"./Dot-ClXgqV3o.js";import"./RegisterGraphicalItemId-DRBnYmKx.js";import"./ErrorBarContext-DvedyHFP.js";import"./GraphicalItemClipPath-BC50Hrc5.js";import"./SetGraphicalItem-CmL2KxpU.js";import"./getRadiusAndStrokeWidthFromDot-VGRijqjA.js";import"./ActiveShapeUtils-CRD4kYgV.js";import"./useGraphicalItemIdentity-D6QbUwzB.js";import"./useElementOffset-mZsotMeL.js";import"./uniqBy-INJ-naV8.js";import"./iteratee-BX6Ptr7z.js";import"./Cross-BGQjXc8G.js";import"./Rectangle-CK5wd433.js";import"./util-Dxo8gN5i.js";import"./Sector-KrCJvFym.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
