import{R as e}from"./iframe-w_s9Pd89.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-vfiIl3GE.js";import{R as h}from"./zIndexSlice-it-eJu8g.js";import{C as g}from"./ComposedChart-DhweWezK.js";import{L as x}from"./Line-Cz9iuHIb.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CNw_APXm.js";import{T as V}from"./Tooltip-BmhbtTd1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Dt-9RID0.js";import"./Layer-3ye4UFiI.js";import"./resolveDefaultProps-6WLroyVF.js";import"./Text-JLeCEDp8.js";import"./DOMUtils-BAN9qVyI.js";import"./isWellBehavedNumber-Dd6bWbIs.js";import"./useId-BHCtlGO9.js";import"./useBackwardsCompatibleTheme-o--ajDl9.js";import"./Label-hJtR_DxY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-29vxzJUo.js";import"./index-BpnKJ17e.js";import"./index-C_RIjmQF.js";import"./types-o4OSUUn5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-rrZYFmVg.js";import"./throttle-CTOajQ3R.js";import"./index-DXNGRRuP.js";import"./index-JMX4B72w.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Ddpcm_Bi.js";import"./axisSelectors-BCLDkErh.js";import"./index-ZJJtOEb6.js";import"./CartesianChart-DHQ6NGvH.js";import"./chartDataContext-2knnLAcK.js";import"./CategoricalChart--3BVlkMW.js";import"./Curve-DX6i7y1N.js";import"./step-BOR9D5VT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DvmQd7Rs.js";import"./useAnimationId-CYLXREv3.js";import"./ActivePoints-CQqYot6E.js";import"./Dot-9MVoPrmB.js";import"./RegisterGraphicalItemId-BROviYY7.js";import"./ErrorBarContext-DSm_oAUC.js";import"./GraphicalItemClipPath-DbdrEo0q.js";import"./SetGraphicalItem-B0AS2kak.js";import"./getRadiusAndStrokeWidthFromDot-BE8QNtys.js";import"./ActiveShapeUtils-CcbjFIOc.js";import"./useGraphicalItemIdentity-D2kK-yFr.js";import"./useElementOffset-CYFoVs6J.js";import"./uniqBy-CtwcYJv4.js";import"./iteratee-Czd3Xbj-.js";import"./Cross-B86mQX4m.js";import"./Rectangle-D15ntAhJ.js";import"./util-Dxo8gN5i.js";import"./Sector-C_7QN0KL.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
